---
title                   : "windows (FAQ)"
date                    : 2021-11-06T16:29:23+08:00
tags        			: [FAQ]
toc                     : true
disableTitleSeparator   : true
draft                   : false
---

## telnet

> telnet 121.40.132.94 80

## node

下载地址：[官网](https://nodejs.org/en/)

## GIF 工具

https://github.com/NickeManarin/ScreenToGif
下载链接：[百度云](https://pan.baidu.com/s/1Mj5nNfBFHkDHIaFVgrnanA) 提取码：7w92

## images-compress

https://github.com/semiromid/compress-images
下载链接：[百度云](https://pan.baidu.com/s/1nk51kV0zLuwQAbtRhPORTw) 提取码：xgkp

## vmware hyper-v not compatible

管理员打开cmd

```shell
bcdedit /copy {default} /d "Windows 10 Without Hyper-V" 
bcdedit /set {xxxxx} hypervisorlaunchtype off
```

执行完第一条命令会得到一串id，把id替换到第二个命令中的xxxxx即可。
然后运行msconfig，在引导的设置里把超时时间设置到3~5秒以上即可。

## 安装http服务

全局安装
npm install -g http-server 
启动服务
http_folder -> cmd -> http-server

## 软链接

可以理解为文件夹的快捷图标

```shell
set cur_path="%cd"
echo cur_path
rd /q /s your_target_folder_path 	# 删除目标文件夹（如果存在）
mklink /J your_target_folder_path from_folder_path
pause
```

## win10 文件夹中打开cmd

open_cmd_here.reg

```shell
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\OpenCmdHere]
@="----- 在此处打开cmd -----"
"Extended"=""

[HKEY_CLASSES_ROOT\Directory\Background\shell\OpenCmdHere\command]
@="cmd.exe -noexit -command Set-Location -literalPath '%V'" 
```

双击如上文件
在任意文件夹中 按住shift键 + 鼠标右键 -> 即可看到 "----- 在此处打开cmd -----" 命令

## 清除垃圾文件

将如下代码写入文档存为 .bat 文件

```shell
@echo off
echo 正在清除系统垃圾文件，请稍等......
del /f /s /q  %systemdrive%\*.tmp
del /f /s /q  %systemdrive%\*._mp
del /f /s /q  %systemdrive%\*.log
del /f /s /q  %systemdrive%\*.gid
del /f /s /q  %systemdrive%\*.chk
del /f /s /q  %systemdrive%\*.old
del /f /s /q  %systemdrive%\recycled\*.*
del /f /s /q  %windir%\*.bak
del /f /s /q  %windir%\prefetch\*.*
rd /s /q %windir%\temp & md  %windir%\temp
del /f /q  %userprofile%\cookies\*.*
del /f /q  %userprofile%\recent\*.*
del /f /s /q  "%userprofile%\Local Settings\Temporary Internet Files\*.*"
del /f /s /q  "%userprofile%\Local Settings\Temp\*.*"
del /f /s /q  "%userprofile%\recent\*.*"
echo 清除系统垃圾完成！
echo. & pause
```

## 强制删除文件

将如下代码写文档，保存为 .bat 批处理文件

```shell
DEL /F /A /Q \\?\%1
RD /S /Q \\?\%1
```

将要删除的文件拖到该批处理文件的图标上即可

## 修改文件名

1. 删除当前目录下所有文件的前 deletenum 个字段

```shell
@echo off
setlocal enabledelayedexpansion
 
set /p deletenum=deletenum:
for /r %%i in (.) do (
    for /f "delims=" %%a in (' dir /b "%%i\*.flv" 2^>nul ') do (
		set "t=%%~na"
        ren "%%i\%%a" "!t:~%deletenum%!%%~xa"
    )
)
pause
```

2. 删除当前目录下所有文件的指定字段

```shell
@echo off
Setlocal Enabledelayedexpansion

set /p "str=your_delete_word:"

for /f "delims=" %%i in ('dir /b *.*') do (
	set "var=%%i" & ren "%%i" "!var:%str%=!"
)
```

## findstr with cmd

| 参数 | 说明 | 
| :-----| :---- |
| /B | 在一行的开始时匹配 |
| /E | 在一行的结尾时匹配 |
| /L | 按字使用搜索字符串 |
| /R | 将搜索字符串作为一般表达式使用 |
| /S | 在当前目录和所有子目录中搜索匹配文件 |
| /I | 指定搜索不分大小写 |
| /X | 打印完全匹配的行 |
| /V | 只打印不包含匹配的行 |
| /N | 在匹配的每行前打印行数 |
| /M | 如果文件含有匹配项，只打印其文件名 |
| /O | 在每个匹配行前打印字符偏移量 |
| /P | 忽略有不可打印字符的文件 |
| /OFF[LINE] | 不跳过带有脱机属性集的文件 |
| /A:attr | 指定有十六进位数字的颜色属性 |
| /F:file | 从指定文件读文件列表 (/ 代表控制台) |
| /C:string | 使用指定字符串作为文字搜索字符串 |
| /G:file | 从指定的文件获得搜索字符串。 (/ 代表控制台) |
| /D:dir  | 查找以分号为分隔符的目录列表　strings 要查找的文字 |
| [drive:][path]filename | 指定要查找的文件。除非参数有 /C 前缀，请使用空格隔开搜索字符串 |

e.g.

    findstr "hello there" x.y           // 在文件 x.y 中寻找 "hello" 或"there" 
    findstr /C:"hello there" x.y        // 在文件 x.y 中寻找 "hello there"
    findstr /s /i Windows *.*           // 当前目录及其子目录找查找包含不区分大小写的“Windows”的文件
    findstr /b /n /r /c:"^ *FOR" *.bas  // 查找没有或有多个空格开头的且包含“FOR”字符的行，并显示行号
    findstr /s /i /m "\<comp.*" *.*     // 查找包含单词 "computer"或"comp"开头的单词的文件