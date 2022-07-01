---
title                   : "搭建 github + hugo 博客 (macos)"
date                    : 2022-05-15T16:29:23+08:00
tags                    : [Tools]
toc                     : true
disableTitleSeparator   : true
draft                   : false
---

## 配置 github

新建仓库: killliu.github.io

点击新仓库的 Settings 页签中的 Pages，设置自定义域名：note.killliu.com -> save

## 配置域名 DNS

DNS 管理配置中增加一条记录

（没有域名则跳过该步骤及相关步骤）

|  类型  |  名称  |  资料  |
|  :----:  |  :----:  |  :----:  |
|  CNAME  |  note  |  :star2: killliu.github.io |

## 安装 hugo

```bash
brew install hugo
hugo version
```

## 拉取仓库

> git clone <https://github.com/killliu/killliu.github.io.git>

cd 到该目录内，创建 hugo 项目 app 后，将其目录内的所有文件移动到上一层，删除 app 目录

> hugo new site app

## 添加主题

> git clone <https://gitlab.com/rmaguiar/hugo-theme-color-your-world.git> themes/color-your-world

修改配置文件 config.toml 以指定主题

> echo 'theme = "color-your-world"' >> config.toml

添加文章
> hugo new posts/hugo_github_blog.md

**`注意`** draft(草稿) 对应的值要改为 false 才会被生成静态页面

## 打包网页

> hugo -d docs

## 本地预览

> hugo server

## 配置 github 目录

点击新仓库的 Settings 页签中的 Pages 找到 source 选择 /docs 目录 -> save

## Install on Windows

[下载地址](https://github.com/gohugoio/hugo/releases)

配置环境变量 >> 我的电脑 >> 属性 >> 高级系统设置 >> 环境变量 >> 系统变量 >> 

Path >> 增加解压出来的文件 hugo.exe 的所在目录路径 >> 重启电脑 >> cmd >> hugo version