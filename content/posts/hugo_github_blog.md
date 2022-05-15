---
title: "github + hugo 搭建博客(macos)"
date: 2022-05-15T16:29:23+08:00
draft: false
tags: [tools]
image: "/image/tn.png"
description: "A smalll description"
showDate: true          # to enable/disable showing dates
math: true              # to enable showing equations (katex)
chordsheet: true        # to add chordsheet styelsheet
katex: true
katexExtensions: [ mhchem, copy-tex ]
---


## github 配置

1. 新建仓库: killliu.github.io
2. 点击新仓库的 Settings 页签中的 Pages，设置自定义域名：note.killliu.com -> save

## 配置域名DNS -> DNS 管理配置中增加一条记录

> CNAME		note		killliu.github.io

## 安装 hugo

brew install hugo
hugo version

## 拉取仓库到本地

> git clone https://github.com/killliu/killliu.github.io.git

## cd 到该目录内，并创建 hugo 项目 app 并将其目录内的所有文件移动到上一层，删除 app 目录

> hugo new site app

## 添加一个主题

> git clone https://gitlab.com/rmaguiar/hugo-theme-color-your-world.git themes/color-your-world

## 修改配置文件以指定主题

> echo 'theme = "color-your-world"' >> config.toml

######## 添加文章 ########
hugo new posts/hugo_github_blog.md

## 注意：draft(草稿) 对应的值要改为 false 才会被生成静态页面

######### 打包网页 #########
hugo -d docs

## github 配置网页目录

点击新仓库的 Settings 页签中的 Pages 找到 source 选择 /docs 目录 -> save

## 本地预览

> hugo server