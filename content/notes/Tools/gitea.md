---
title       			      : "gitea (centos)"
date        			      : 2021-11-13T16:29:23+08:00
tags        			      : [tools]
toc                     : true
disableTitleSeparator   : true
draft                   : false
---

## 安装

[gitea.service](https://github.com/go-gitea/gitea/blob/main/contrib/systemd/gitea.service) 配置参考

```shell
mkdir /root/gitea
cd /root/gitea
wget -O gitea https://dl.gitea.io/gitea/1.14.3/gitea-1.14.3-linux-amd64
chmod +x gitea
# 创建用户
adduser git
   
# 创建所需目录结构
mkdir -p /var/lib/gitea/custom/
mkdir -p /var/lib/gitea/data/
mkdir -p /var/lib/gitea/log/
chown -R git:git /var/lib/gitea/
chmod -R 750 /var/lib/gitea/
mkdir /etc/gitea
chown root:git /etc/gitea
chmod 770 /etc/gitea
# 配置Gitea的工作目录 
export GITEA_WORK_DIR=/var/lib/gitea/
# 复制应用文件到全局路径
cp gitea /usr/local/bin/gitea
# 开始启动配置 gitea.service 参考上面连接
vi /etc/systemd/system/gitea.service
sudo systemctl enable gitea
sudo systemctl start gitea
# 启动配置
GITEA_WORK_DIR=/var/lib/gitea/ /usr/local/bin/gitea web -c /etc/gitea/app.ini
# 打开网页进行配置 eg. gitea.killliu.com
...
# 重启
systemctl restart gitea

# 查看进程日志
journalctl -b 0 -u gitea
```

**`error: ........ status=217/USER`**

将 /etc/systemd/system/gitea.service 中的 Type、User、Group这几行注释掉

## 配置 ssh key

### macos

```sh
# git bash
ssh-keygen -t rsa -C 'your_email@email.com'
# 然后一路回车(-C 参数是你的邮箱地址)
# 查看本机ssh公钥
cd ~/.ssh
ls
cat id_rsa.pub
# 多个密钥
ssh-keygen -t rsa -C "your_email@email.com" -f ~/.ssh/new_ssh_key_names
```

### windows

```sh
cmd
# c:\Users\admin
cd c:\Users\admin\.ssh
ssh-keygen -t rsa -C "sha.liu@igg.com"
# -t 指定密钥类型，默认是rsa，可以省略
# -C 设置注释文字，比如邮箱
# -f 指定密钥文件存储文件名

# 按三次回车
# id_rsa
# id_rsa.pub

# 用记事本打开 id_rsa.pub，并复制其内容
# gitlab ---> Profile Settings ---> SSH Keys ---> add key
```

## 配置 SourceTree

### macos

```sh
# 终端 
cd ~/.ssh/
ssh-keygen -t rsa -C "your_username_or_email"
# Enter file in which to save the key: your_new_key_name
# 将生成的文件用记事本打开并复制其所有内容 
~/.ssh/your_new_key_name.pub
# 打开网页添加信任（eg.）10.211.55.6
# 登陆后右上角
# settings
# SSH Keys
# 粘贴
# add key
# 将网站中库的http库路径复制
# source tree
# 新建
# 从URL克隆
```

**`error: 提示想要使用储存在钥匙串...中的机密信息`**

打开钥匙串访问 ---> 双击对应的应用 eg. ... Access Key for  git ---> 访问控制 ---> 允许所有应用程序访问此项目 ---> 储存更改

### windows

```sh
# 工具 -> 选项 -> 一般 
# SSH客户端配置
# SSH密钥：C:\Users\admin\Documents\gitlab_ssh_key\id_rsa
# SSH客户端： OpenSSH
```

## gitea 本地拉取 & master 推送

```sh
# 进入某个目录，右键打开 git bash
git clone http://gitea.killliu.com/killliu/klframe.git
# 进入klframe目录，并新增一 README.md 空文件
git add .
# 提交到本地库
git commit -m "add readme file"
# 推送并建立远端库
git push -u origin master
```

## 配置 ClashX 代理

```sh
# 查看当前代理
git config --global --get http.proxy
git config --global --get https.proxy
# 清空当前代理
git config --global --unset http.proxy
git config --global --unset https.proxy
# 配置 clashx 代理
git config --global http.proxy protocol://127.0.0.1:7890
git config --global https.proxy protocol://127.0.0.1:7890
```
