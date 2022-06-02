---
title       			: "redis"
date        			: 2020-02-12T12:29:23+08:00
tags        			: [Tools]
toc                     : true
disableTitleSeparator   : true
draft                   : false
---

## centos7

[官网下载地址](https://redis.io/download)

[redis-6.2.5](https://download.redis.io/releases/redis-6.2.5.tar.gz)

```sh
cd ~
wget http://download.redis.io/releases/redis-6.2.5.tar.gz
tar xzf redis-6.2.5.tar.gz
cd redis-6.2.5
make 
# 指定目录安装 
make install PREFIX=/usr/local/redis
###### 设置启动 ######
vi /root/redis-6.2.5/redis.conf
...
# 修改如下内容，设置后台启动
daemonize yes
...
:wq
# 复制配置文件
cp /root/redis-6.2.5/redis.conf	/usr/local/redis
# 设置开机启动(追加如下内容)
vi /etc/rc.d/rc.local						
/usr/local/redis/bin/redis-server /usr/local/redis/redis.conf
：wq
# 设置开机启动(追加如下内容)
vi /usr/lib/systemd/system/redis.service
#!/bin/sh
[Unit]
Description=Redis
After=network.target
[Service]
Type=forking
ExecStart=/usr/local/redis/bin/redis-server /usr/local/redis/redis.conf
[Install]
WantedBy=multi-user.target
：wq
###### 重启 ######
systemctl daemon-reload
systemctl start redis.service
systemctl enable redis.service

systemctl disable firewalld.service
systemctl stop firewalld.service
init 6
###### 设置密码 ######
cd /root/redis-6.2.5/src
./redis-cli
127.0.0.1:6379> config set requirepass "your_password"
127.0.0.1:6379> auth your_password
```

**`error:`** cc command not found

原因：没有安装 gcc 5.3 以上

```
yum install gcc
yum clean all
yum upgrade
yum -y install centos-release-scl
yum -y install devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutils
echo "source /opt/rh/devtoolset-9/enable" >>/etc/profile
```

重新打开secureCRT 再重新 make

**`error:`** Permission denied

关闭 SELinux

```shell
vi /etc/sysconfig/selinux
...
SELINUX=disabled
...
```

## mac

```shell
wget http://download.redis.io/releases/redis-6.0.5.tar.gz
tar xzf redis-6.0.5.tar.gz
cd redis-6.0.5
make
```

**开机启动**

在/Library/LaunchDaemons下新建**com.redis.plist**，内容如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>redis</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/bin/redis-server</string>
        <string>/usr/local/etc/redis.conf</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist> 
```

载入开机启动配置

> sudo launchctl load /Library/LaunchDaemons/com.redis.plist

启用开机启动

> sudo launchctl start redis

关闭开机启动

> sudo launchctl stop redis

启动

> ./src/redis-server ../redis.conf

测试

```shell
$ src/redis-cli
redis> set foo bar
OK
redis> ping
"pong"
```

设置密码，修改 redis.conf 中的reqquirepass 项，或

>  config set requirepass Rtx123456()

查询密码

>auth Rtx123456() 			# 密码验证
>
>config get requirepass

**`error:`** path had bad ownership/permissions

> sudo chown root /Library/LaunchDaemons/com.redis.plist

**`注意`**：启用开机启动务必要确定 xxx/redis-server xxx/redis.conf 可以启动服务（**权限**和**可执行**）

其他电脑访问

> vi /usr/local/etc/redis.conf
>
> bind 0.0.0.0 

重启 redis

# win10

[下载地址](https://github.com/tporadowski/redis/releases)

设置环境变量

**eg. 此电脑 -> 属性 -> 高级系统设置 -> 环境变量 -> 系统变量 -> path -> 编辑 -> 增加路径 C:\redis-5.0.9**

设置密码 cmd

> redis-cli -h 127.0.0.1 -p 6379
>
> 127.0.0.1:6379> config set requirepass iGG2020RD5()
>
> 127.0.0.1:6379> config get requirepass

设置密码 (永久修改)

>cd C:\Program Files\Redis
>
>**修改 redis.windows-service.conf 文件 **
>
>\# requirepass your_password

密码登录

> redis-cli -p 6379 -a iGG2020RD5()

启动

cmd 在进入Redis的安装目录

> redis-server --service-install redis.windows.conf --loglevel verbose  ( 安装redis服务 )
>
> redis-server --service-start ( 启动服务 )
>
> redis-server --service-stop ( 停止服务 ）

启动指定的配置文件 redis-server --service-start redis.windows-service.conf

## 基本操作

### 切换库

> select index

- 切换库

  > select 0

- 清空当前库

  > flushdb
