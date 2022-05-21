---
title                   : "raspberry"
date                    : 2022-03-01T16:29:23+08:00
tags        			      : [FAQ]
toc                     : true
disableTitleSeparator   : true
draft                   : false
---

## Raspberry Ubuntu

官网 [Raspberry](https://www.raspberrypi.org/software/) 中下载树莓派的安装软件

[树莓派系统下载地址](https://www.raspberrypi.com/software/operating-systems/) [ubuntu镜像地址](https://ubuntu.com/download/raspberry-pi)

通过 Raspberry Pi Image 软件安装 ubuntu 系统

**高级设置中不要加任何配置**

## wifi

烧录后，修改 boot 盘符中的 **network-config** 文件，以启用 wifi

```yaml
wifis:
	wlan0:
		dhcp4: true
		optional: true
		access-points:
			"your_essid":
				password: "your_password"
```

默认账户密码都是：ubuntu

等界面上显示了 cliud-init 及 SSH HOST 字样时才可以登陆

登陆后会要求修改密码，**注意看提示，修改新密码**

- 修改主机名

  > sudo vi /etc/hostname

- 修改 root 密码

  ```sh
  sudo passwd root
  # 根据提示输入新密码（两次）
  # 切换到 root 用户
  su
  # 输入 root 密码以切换到 root 用户
  ```

- 修改用户名 ubuntu -> killliu

  ```sh
  # 修改 shadow
  vi /ect/shadow
  # >>> ubuntu 修改为 killliu
  # 修改开始目录
  cd /home
  mv ubuntu killliu
  # 修改 passwd 文件
  vi /ect/passwd
  # >>> ubuntu 修改为 killliu
  # 重启
  reboot
  ```

- root 用户切换到普通用户

  > su - killliu

## 远程登录

```sh
# 查看是否启动（如果能查到ssh进程，说明已经安装并启动了，不用再安装)
ps -e |grep ssh

# 安装 ssh
sudo apt-get install openssh-server

# 启动 ssh
sudo service ssh start

# 打开 ssh 配置文件
sudo vim /etc/ssh/sshd_config

# 在 PermitRootLogin Prohibit-password 下面添加一行（表示运行 root 用户远程登录）
PermitRootLogin yes

# 保存退出后，执行命令使修改生效
/etc/init.d/ssh restart

# 设置 root 用户密码
sudo passwd root
 
# 启用 root 账号
sudo passwd --unlock root

# 远程使用 root 用户连接到树莓派
ssh root@ip
```

## NetworkManager

```sh
# 安装 net-tools
sudo apt install net-tools
# 安装 wireless-tools
sudo apt install wireless-tools
# 安装 network-manager
sudo apt install network-manager

# 卸载 net-tools
sudo apt-get --purge remove net-tools
# 卸载 wireless-tools
sudo apt-get --purge remove wireless-tools
# 卸载 wireless-tools
sudo apt-get --purge remove network-manager

# 列举网卡设备
ifconfig

# 添加wifi网络信息
# wifi 名中没有空格时，不要加双引号
sudo vi /etc/netplan/50-cloud-init.yaml

network:
	ethernets:
		eth0:
			dhcp4: true
			optional: true
	wifis:
		wlan0:
		    optional: true
		    access-points:
			    "wifi 名称":
			        password: "密码"
			dhcp4: true
			
		wlan1:
		    optional: true
		    access-points:
			    OtherWifiName:
			        password: "密码"
			dhcp4: true
			
# 应用配置
# sudo netplan generate
# sudo netplan apply

# 重启
sudo reboot

# 连 wifi
nmtui

# 确认是否连上 wifi
iw wlan0 link
# 显示 可连接的 wifi 列表
iwlist wlan0 scan | grep -i ESSID

############################### nmcli ###############################
# 查看网卡硬件及其状态
nmcli d status
nmcli c #或者 nmcli connection show
nmcli c show --active 
# 查看 wifi 是否开启
nmcli radio wifi
# 开启 wifi
nmcli radio wifi on
# 查看 wifi
nmcli device wifi list
# 连接 wifi
nmcli d wifi connect "KLWIFI" password "416352565"
# 删除 wifi
nmcli c del uuid
# --- 连接公司的 wifi
nmcli con add type wifi ifname wlan0 con-name SKYUNION ssid SKYUNION
nmcli con edit id SKYUNION
> set ipv4.method auto
> set wifi-sec.key-mgmt WPA-EAP
> set 802-1x.eap PEAP
> set 802-1x.identity shaliu
> set 802-1x.password 416352565
> set 802-1x.phase1-peaplabel 0
> set 802-1x.phase1-peapver 0
> set 802-1x.phase2-auth MSCHAPV2
> save
> activate
# 设置自动连接
nmcli connnection modify SKYUNION connection.autoconnect yes

# 配置
vi /etc/wpa_supplicant/wpa_supplicant.conf
......
country=CN
network={
	ssid="KLWIFI"				# wifi 名称
	key_mgmt=WPA2-Personal		# 加密方式
	psk="416352565"				# 密码
}
......
# 配置公司wifi
......
network={
    ssid="SKYUNION"
    key_mgmt=WPA-EAP
    eap=PEAP
    identity="shaliu"
    password="416352565"
    phase1="peaplabel=auto pepver=auto"
    phase2="MSCHAPV2"
}
......
# 查看wifi的ip地址
ip a 
# 10.26.43.2
```

## 开机启动时执行脚本，启动npc

```sh
vi /etc/rc.d/rc.local
# 追加
sudo su - root -c "cd /data/ && sh start_npc.sh start &"
# 给权限
chmod +x /etc/rc.d/rc.local
```

## reids & nginx

```shell
yum install -y tar
yum install -y wget
# for redis
yum -y install gcc automake autoconf libtool make
# 参考 env 目录中 nginx、redis 安装说明
# 删除无用包
yum clean all

# ----- nginx.conf -----
    server {
    	listen       80 default_server;
        server_name  localhost; 
        location / {
	   		proxy_pass http://127.0.0.1:4000;
        }
     }
```

## 防火墙

```sh
# 查看开放的端口列表
firewall-cmd --zone=public --list-ports
# 开放 80、3306 端口
firewall-cmd --zone=public --add-port=80/tcp --permanent
firewall-cmd --zone=public --add-port=3306/tcp --permanent
# 关闭端口 --- 4000 for hexo-admin
firewall-cmd --permanent --zone=public --remove-port=4000/tcp
# 重启防火墙
systemctl restart firewalld
### 已开放端口
22 		
80
81		# nps 后台
9515	# nps TCP 端口
```

## 安装 mysql

```sh
yum -y install mysql-server mysql mysql-devel
# 启动
systemctl start mysqld.service
# 查看状态
systemctl status mysqld.service
# 查看 root 初始密码 ------ 初始密码为空
grep "password" /var/log/mysql/mysqld.log
# 登录 mysql，并修改密码
mysql -u root
use mysql;
alter user 'root'@'localhost' identified with mysql_native_password by 'iGG2020RD5()';
update user set Host='%' where User='root';
commit;
flush privileges;
```

## Golang

```sh
yum install -y epel-release
yum install -y golang
```

## 安装

> yum -y install rsync

## npc

[linux_arm64_client.tar.gz](https://github.com/ehang-io/nps/releases/download/v0.26.10/linux_arm64_client.tar.gz)

开机启动 npc

```sh
vi /etc/rc.local
# 追加代码
nohup /data/npc -server=120.40.132.94:9515 -vkey=xty8fenomquydbgr -type=tcp &
```

## jellyfin

[官网](https://jellyfin.org/)

[linux stable archives](https://repo.jellyfin.org/releases/server/linux/stable/)

```sh
# 安装 ffmpeg --- 参考 ./linux.md 

mkdir /opt/jellyfin
cd /opt/jellyfin
# download
wget https://sgp1.mirror.jellyfin.org/releases/server/linux/versions/stable/server/10.7.6/jellyfin-server_10.7.6_linux-arm64.tar.gz
# unzip
tar xvzf jellyfin-server_10.7.6_linux-arm64.tar.gz

# 重命名文件夹
mv ./jellyfin-server_10.7.6 ./jellyfin

# jellyfin.sh
vi jellyfin.sh
......
#!/bin/bash
JELLYFINDIR="/opt/jellyfin"
FFMPEGDIR="/usr/share/jellyfin-ffmpeg"

$JELLYFINDIR/jellyfin/jellyfin \
 -d $JELLYFINDIR/data \
 -C $JELLYFINDIR/cache \
 -c $JELLYFINDIR/config \
 -l $JELLYFINDIR/log \
 --ffmpeg $FFMPEGDIR/ffmpeg
 ......
 
 # 设置权限
sudo chown -R user:group *
sudo chmod u+x jellyfin.sh

# web client
cd ./jellyfin
mkdir jellyfin-web
cd ./jellyfin-web
wget https://sgp1.mirror.jellyfin.org/releases/server/linux/versions/stable/web/10.7.6/jellyfin-web_10.7.6_portable.tar.gz
# unzip
tar zvxf jellyfin-web_10.7.6_portable.tar.gz
# todo 解压出来的目录下的文件全部复制到 jellyfin-web 目录
# 开放 8096 端口
firewall-cmd --zone=public --add-port=8096/tcp --permanent

# 访问 10.26.43.2:8096
```

**`ERROR Couldn't find a valid ICU package installed on the system`**

> yum -y install libicu

## hexo

[hexo 官网](https://hexo.io/zh-cn/) --- [github](https://github.com/hexojs/hexo) --- [官网主题](https://hexo.io/themes/)

```shell
cd ~
# 安装 hexo
npm install hexo-cli -g
# 拉取 hexo 服务代码
hexo init blog
cd blog
# 把 md 文档转化到静态html并保存在public目录下
hexo g
# ---- 配置 nginx --- 
cd /etc/nginx
user root;
    server {
    	listen       80 default_server;
        server_name  localhost;
        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;
 
        location / {
           root /root/blog/public;
           index index.html index.htm;
        }
     }

systemctl restart nginx

# 修改默认端口
vi node_modules\hexo-server\index.js
# 添加admin后台，根据提示设置密码、修改配置
npm install --save hexo-admin
# 修改主题

# 启动服务
hexo s
```

**`error: line.mathALL is not funciton`**

fixed: node 版本 12.0.0 以上

```shell
# 清除 nodejs 缓存
npm cache clean -f
# 安装nodejs管理工具
npm install -g n
# 切换已安装版本
n
# 安装官方稳定版本
n stable
```

## 403 forbidden

```shell
vi /etc/selinux/config
SELINUX=disabled
reboot
```
