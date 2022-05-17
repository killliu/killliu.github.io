---
title                   : "FAQ macos"
date                    : 2022-05-17T16:29:23+08:00
tags        			: [faq]
toc                     : true
disableTitleSeparator   : true
draft                   : false
---

## 端口占用

```sh
# 查看端口占用程序
sudo lsof -i tcp:2000
```

## 彻底删除某个软件

```sh
# 清除登陆项
系统偏好设置 — 用户组与群组 — 登陆项 — 移除（如果有的话）
# 清除配置项
打开Finder — 前往 — 前往文件夹 — /Library/LaunchAgents
打开Finder — 前往 — 前往文件夹 — ~/Library/LaunchAgents
打开Finder — 前往 — 前往文件夹— /Library/StartupItems
# 清除 钥匙串访问 数据
```

## http server

```sh
# 安装 nodejs
# 安装 http-server
sudo npm install http-server -g
# 运行
cd xxx/targetFolder
http-server
```

## 无法打开 “x x x”, 因为无法验证开发者

用一下命令增加 --- 安全性与隐私 ---> 任何来源

> sudo spctl --master-disable

## 开机运行 sh 脚本

新建“自动操作”文档

选择“运行Shell脚本”，Shell: /bin/sh

alias mysql=/usr/local/Cellar/mysql/8.0.16/bin/mysql.server

mysql start

运行 ---> 保存

系统偏好设置 ---> 用户与群组 ---> 登陆项 加入刚才生成的自动操作app ---> 重启电脑

## ssh 远程登陆

终端 ---> ssh -l root 10.211.55.6

**`error`**: Received disconnect from 10.211.55.6 port 22:2: Too many authentication failures Disconnected from 10.211.55.6 port 22

终端 ---> ssh -l root 10.211.55.6 -o PubkeyAuthentication=no

## scp 远程下载

```sh
# cd 到某个目录
scp root@xxx.xxx.xxx.xxx:/root/com.yahaha.lua-runtime.7z ./lua.7z
```

## lua 环境安装

[www.lua.org](http://www.lua.org)

```sh
tar -zvxf lua.5.3.5.tar
make macosx
sudo make install
make clean
# 查看安装路径
which lua
# 查看安装版本信息
lua -v
```

## golang

JetBrain Golang 2020.1 下载链接: [百度云](https://pan.baidu.com/s/1oYHKDmEOOFqxXZsco18huA) 密码: v50z

适用于 JetBrain 2020.1 版本的所有软件包，使用请购买正版

下载 go 包：https://studygolang.com/dl

**依赖包管理**

设置环境变量

GO111MODULE   on

GOPROXY        https://goproxy.io   或  https://athens.azurefd.net

启用包管理

Settings -> Go Modules(vgo) -> Enable Go Modules(vgo) integration

Proxy -> on  或 https://goproxy.io 或 https://athens.azurefd.net

## brew not found

参考[官网](https://brew.sh/)

```bash
    # 在终端中输入如下命令
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    # 查看 brew 版本
    brew -v
```

## npm

```bash
    # 安装 node
    brew install node
    # 查看 node 版本
    node -v
    # 查看 npm 版本
    npm -v
    # 升级 npm
    npm install nom -g
    # 查看所有全局安装的模块
    npm list -g
    # 卸载模块
    npm uninstall xxx
    # 卸载后查看
    npm ls
    # 更新模块
    npm update xxx
```

## 关闭系统更新红点显示

系统偏好设置 ---> 软件更新 --->  取消“自动保持我的Mac最新” ---> 高级 ---> 取消所有勾选

关闭红点显示

```bash
    defaults write com.apple.systempreferences AttentionPrefBundleIDs 0
    Killall Dock
```
