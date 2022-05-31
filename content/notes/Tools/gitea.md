---
title       			: "gitea (centos)"
date        			: 2021-11-13T16:29:23+08:00
tags        			: [Tools]
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

## git 相关命令

```sh
# 初始化一个 git 仓库
git init

# 增加一个 Readme.md  文件
git add Readme.md
# 增加当前目录内的所有文件
git add .

# 提交文件到仓库缓存 (-m 后面就是本次提交的说明)
git commit -m "your describe"

# 提交到远程仓库
git push

# 查看 git 状态
git status
# 查看 修改
git diff yourFileName.txt

# 退回版本
git reset --hard origin/master
# or
git reset --hard commitVersion

```

## git 示例
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

## macos 中编译 linux

> TAGS=bindata GOOS=linux GOARCH=amd64 make build

修改为以 root 权限运行 gitea (不建议这么做)

/modules/settings/setting.go 第 949 行左右

> unsafeAllowRunAsRoot := Cfg.Section("").Key("I_AM_BEING_UNSAFE_RUNNING_AS_ROOT").MustBool(true)

## 修改登陆页面

> /templates/user/auth/signin.html

```html

<!DOCTYPE html>
<html lang="{{.Lang}}" class="theme-{{.SignedUser.Theme}}">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>{{if .Title}}{{.Title | RenderEmojiPlain}} - {{end}} {{if .Repository.Name}}{{.Repository.Name}} - {{end}}{{AppName}}</title>
	<link rel="manifest" href="data:{{.ManifestData}}"/>
	<meta name="theme-color" content="{{ThemeColorMetaTag}}">
	<meta name="default-theme" content="{{DefaultTheme}}" />
	<meta name="author" content="{{if .Repository}}{{.Owner.Name}}{{else}}{{MetaAuthor}}{{end}}" />
	<meta name="description" content="{{if .Repository}}{{.Repository.Name}}{{if .Repository.Description}} - {{.Repository.Description}}{{end}}{{else}}{{MetaDescription}}{{end}}" />
	<meta name="keywords" content="{{MetaKeywords}}">
	<meta name="referrer" content="no-referrer" />
{{if .GoGetImport}}
	<meta name="go-import" content="{{.GoGetImport}} git {{.CloneLink.HTTPS}}">
	<meta name="go-source" content="{{.GoGetImport}} _ {{.GoDocDirectory}} {{.GoDocFile}}">
{{end}}
	<script>
		<!-- /* eslint-disable */ -->
		window.config = {
			appVer: '{{AppVer}}',
			appSubUrl: '{{AppSubUrl}}',
			assetUrlPrefix: '{{AssetUrlPrefix}}',
			runModeIsProd: {{.RunModeIsProd}},
			customEmojis: {{CustomEmojis}},
			useServiceWorker: {{UseServiceWorker}},
			csrfToken: '{{.CsrfToken}}',
			pageData: {{.PageData}},
			requireTribute: {{.RequireTribute}},
			notificationSettings: {{NotificationSettings}}, {{/*a map provided by NewFuncMap in helper.go*/}}
			enableTimeTracking: {{EnableTimetracking}},
			{{if .RequireTribute}}
			tributeValues: Array.from(new Map([
				{{ range .Participants }}
				['{{.Name}}', {key: '{{.Name}} {{.FullName}}', value: '{{.Name}}',
				name: '{{.Name}}', fullname: '{{.FullName}}', avatar: '{{.AvatarLink}}'}],
				{{ end }}
				{{ range .Assignees }}
				['{{.Name}}', {key: '{{.Name}} {{.FullName}}', value: '{{.Name}}',
				name: '{{.Name}}', fullname: '{{.FullName}}', avatar: '{{.AvatarLink}}'}],
				{{ end }}
				{{ range .MentionableTeams }}
					['{{$.MentionableTeamsOrg}}/{{.Name}}', {key: '{{$.MentionableTeamsOrg}}/{{.Name}}', value: '{{$.MentionableTeamsOrg}}/{{.Name}}',
					name: '{{$.MentionableTeamsOrg}}/{{.Name}}', avatar: '{{$.MentionableTeamsOrgAvatar}}'}],
				{{ end }}
			]).values()),
			{{end}}
			mermaidMaxSourceCharacters: {{MermaidMaxSourceCharacters}},
			{{/* this global i18n object should only contain general texts. for specialized texts, it should be provided inside the related modules by: (1) API response (2) HTML data-attribute (3) PageData */}}
			i18n: {
				copy_success: '{{.i18n.Tr "copy_success"}}',
				copy_error: '{{.i18n.Tr "copy_error"}}',
				error_occurred: '{{.i18n.Tr "error.occurred"}}',
				network_error: '{{.i18n.Tr "error.network_error"}}',
			},
		};
		{{/* in case some pages don't render the pageData, we make sure it is an object to prevent null access */}}
		window.config.pageData = window.config.pageData || {};
	</script>
	<link rel="icon" href="{{AssetUrlPrefix}}/img/logo.svg" type="image/svg+xml">
	<link rel="alternate icon" href="{{AssetUrlPrefix}}/img/favicon.png" type="image/png">
	<link rel="stylesheet" href="{{AssetUrlPrefix}}/css/index.css?v={{MD5 AppVer}}">
	<noscript>
		<style>
			.dropdown:hover > .menu { display: block; }
			.ui.secondary.menu .dropdown.item > .menu { margin-top: 0; }
		</style>
	</noscript>

	<meta property="og:title" content="{{AppName}}">
	<meta property="og:type" content="website" />
	<meta property="og:image" content="{{AssetUrlPrefix}}/img/logo.png" />
	<meta property="og:url" content="{{AppUrl}}" />
	<meta property="og:description" content="{{MetaDescription}}">

<meta property="og:site_name" content="{{AppName}}" />
{{if .IsSigned }}
	{{ if ne .SignedUser.Theme "gitea" }}
		<link rel="stylesheet" href="{{AssetUrlPrefix}}/css/theme-{{.SignedUser.Theme | PathEscape}}.css?v={{MD5 AppVer}}">
	{{end}}
{{else if ne DefaultTheme "gitea"}}
	<link rel="stylesheet" href="{{AssetUrlPrefix}}/css/theme-{{DefaultTheme | PathEscape}}.css?v={{MD5 AppVer}}">
{{end}}
</head>
<body>

	<div class="full height">
		<noscript>{{.i18n.Tr "enable_javascript"}}</noscript>

		<div class="page-content user signin{{if .LinkAccountMode}} icon{{end}}">
			{{template "user/auth/signin_navbar" .}}
			<div class="ui middle very relaxed page grid">
				<div class="ui container column fluid">
					{{template "user/auth/signin_inner" .}}
				</div>
			</div>
		</div>

{{if false}}
	{{/* to make html structure "likely" complete to prevent IDE warnings */}}
	</div>
</body>
</html>
{{end}}

```

修改脚标

> /templates/user/auth/signin_inner.html 第 43 行左右，删除以下行

```html
<a href="{{AppSubUrl}}/user/forgot_password">{{.i18n.Tr "auth.forgot_password"}}</a>
```


