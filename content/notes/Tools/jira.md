---
title       			: "jira (centos)"
date        			: 2021-11-06T16:29:23+08:00
tags        			: [tools]
toc                     : true
disableTitleSeparator   : true
draft                   : false
---

[jira core 官网下载](https://www.atlassian.com/software/jira/core/download)

[jira software 官网下载](https://www.atlassian.com/software/jira/core/download)

[jira service management 官网下载](https://www.atlassian.com/software/jira/service-management/download)

## 安裝java

```bash
tar -xvf jdk-8u101-linux-x64.tar.gz -C /usr/local
mv /usr/local/jdk1.8.0_101/ /usr/local/java
ls /usr/local/
# 配置环境
sed -i '$aJAVA_HOME=/usr/local/java\nCLASSPATH=$JAVA_HOME/lib\nPATH=$PATH:$JAVA_HOME/bin\nexport PATH JAVA_HOME CLASSPATH' /etc/profile
# 重置配置
source /etc/profile

java -version
```

## 安装 mysql 5.7

```bash
rm -rf /var/log/mysqld.log
sudo dnf remove @mysql
sudo dnf module reset mysql && sudo dnf module disable mysql

# 创建新的存储库文件
sudo vi /etc/yum.repos.d/mysql-community.repo
...
[mysql57-community]
name=MySQL 5.7 Community Server
baseurl=http://repo.mysql.com/yum/mysql-5.7-community/el/7/$basearch/
enabled=1
gpgcheck=0

[mysql-connectors-community]
name=MySQL Connectors Community
baseurl=http://repo.mysql.com/yum/mysql-connectors-community/el/7/$basearch/
enabled=1
gpgcheck=0

[mysql-tools-community]
name=MySQL Tools Community
baseurl=http://repo.mysql.com/yum/mysql-tools-community/el/7/$basearch/
enabled=1
gpgcheck=0
...

sudo dnf config-manager --disable mysql80-community
sudo dnf config-manager --enable mysql57-community
sudo dnf install mysql-community-server
# 检查 mysql 版本
rpm -qi mysql-community-server
# 配置
sudo systemctl enable --now mysqld.service
# 查看密码
sudo grep 'A temporary password' /var/log/mysqld.log |tail -1
# 登陆
mysql -u root -p
# 修改密码
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('your_password');
# 授权
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%'IDENTIFIED BY 'your_password' WITH GRANT OPTION;
FLUSH PRIVILEGES;

# 修改配置文件
vi /etc/my.cnf
......
default-storage-engine=INNODB 		# 将默认存储引擎设置为 InnoDB
character_set_server=utf8mb4 		# 指定数据库服务器使用的字符集
innodb_large_prefix=ON 			# 启用大前缀
innodb_default_row_format=DYNAMIC 	# 将默认行格式设置为  DYNAMIC
innodb_file_format=Barracuda 		# 将 InnoDB 文件格式设置为 Barracuda
innodb_log_file_size=2G 		# 指定值 innodb_log_file_size 至少为2G
max_allowed_packet = 256M 		# 将 MySQL 数据包大小设置为更大的值（256MB）
transaction-isolation=READ-COMMITTED	# 解决安装 confluence 时 “不正确的隔离级别” 的保存
......
# 重启
systemctl restart mysqld
```

## 安裝 jira

[jira software 官网下载](https://www.atlassian.com/software/jira/core/download)

```bash
chmod +x *.bin
sudo ./atlassian-jira-software-8.13.3-x64.bin

# 安装目录
cd /opt/atlassian/jira 
# Home 目录
cd /var/atlassian/application-data/jira
 
# 查看服务进程、端口号
netstat -ntap |grep 8080
ps -ef |grep jira

# 复制 mysql 驱动
cp ./mysql-connector-java-5.1.39-bin.jar  /opt/atlassian/jira/atlassian-jira/WEB-INF/lib/

# 关闭服务
cd /opt/atlassian/jira/bin
sh shutdown.sh
# 破解的方式启动 jira
JAVA_OPTS="-javaagent:/root/jira/atlassian-agent.jar" /opt/atlassian/jira/bin/startup.sh

# 修改 dbconfig.xml
cd /opt/atlassian/jira/bin
sh config.sh
# 设置配置文件 dbconfig.xml

# 进入安装页面 http://192.168.91.128:8080
```

## 破解 jira

[atlassian-agent.jar](https://gitee.com/pengzhile/atlassian-agent)

```shell
# 破解的方式启动 jira
JAVA_OPTS="-javaagent:/root/jira/atlassian-agent.jar" /opt/atlassian/jira/bin/startup.sh
# 验证是否配置成功：
ps aux|grep java # 找到对应的进程看看-javaagent参数是否正确附上

# 查看参数
java -jar /root/jira/atlassian-agent.jar

# 生成激活码
java -jar atlassian-agent.jar -p jira -m sha.liu@qq.com -n liusha -o igg -s B6EG-ZAK5-UCP4-VE34

AAABgw0ODAoPeJx9kl9PwjAUxd/7KZb43LkxQCFpIm6NmY4/ccCDb2VcWM3o5m2H4qe3yExACEkf2
puec389vTepMM6zUE7gOV7QD7p9u+Hp1Gl5LZ+sEUDlZVUBuonMQGmY7ioYiQ2wcDwc8tcwHiQkR
BBGlioSBtheSD2fBh65IolAZyirvYrNVCE30sDSKQ4CZ7FzcmMq3b+9/c5lAa4syVBIZUAJlQH/q
iTumm73Perd2UXeJYo/Sr6UB+tREg/jKY/IqN4sAMermQbUjPp/cFe8KiyXdWbc/YHqcmU+BYJ7Z
nTlrsiM3AIzWMNJlsf15s1z67YnbhG+FUX9mydbiUIDGeNaKKkPJblek7BUxlpwG0nBdC7cQtYPH
x9uVm4ONJcZj7tegU6NQAPYNG9iiiOWxFHKRzTxu77f63Xuel7nPjhJ/dJHp4BbQCt/7PIn+jZ46
dBZOGnTOQ/al+br/OcmNWa50PB/uo7FYEcDK5S6eZ4FZRdgm+B+GW1mNrofz2YFQzAtAhR6UtINy
Qsb4FnEAc3y6RhTf9AwoQIVAIMczStmMAN8HWMoaJKIPDpDOjOsX02iq

```

## 安装 confluence

```bash
chmod +x *.bin
sudo ./atlassian-confluence-7.4.6-x64.bin

# 安装目录
/opt/atlassian/ 
# Home 目录
/var/atlassian/application-data/

# 复制 mysql 驱动
cp ./mysql-connector-java-5.1.39-bin.jar  /opt/atlassian/confluence/confluence/WEB-INF/lib

# 关闭服务
cd /opt/atlassian/confluence/bin
sh shutdown.sh
# 破解的方式启动 confluence
JAVA_OPTS="-javaagent:/root/jira/atlassian-agent.jar" /opt/atlassian/confluence/bin/startup.sh

# 查看服务进程、端口号
netstat -ntap |grep 8090
ps -ef |grep confluence

# http://192.168.91.128:8090/
......
# MySQL ---> 外部数据库 ---> JDBC ---> 空白站点 ---> 与JIRA连接
# jira 服务器位置：http://192.168.91.128:8080
# 使用 jira 账号：liusha
# 使用 jira 账号的密码：???
......

# error: 不正确的隔离级别
vi /etc/my.cnf
......
transaction-isolation=READ-COMMITTED
......

# 生成激活码
java -jar atlassian-agent.jar -p conf -m sha.liu@igg.com -n liusha -o igg -s BZG0-H9N1-37KE-SGK5

AAABOw0ODAoPeJxtkFFvgjAUhd/7K5rsGWxRdJo02QbEORHN0D3srXZXaQKFtMXM/fpVYC+LSV967
r3nnvs95NziN67wmGASLmiwmExwku9xQAKKIg3cylrF3AK7KR6h3pig5MLLtquwEy8NoBiM0LLpl
IMqZSUtfOFSClAG8PGKC2sbsxiNfgpZgi9rtNVnrqTpTeT5jEStTj4XVl6AWd0Cimpl3T/ZcFkyU
3C/lO2T6/RFXfXdueXagh4ydFLar9xfG8h4BSzabjbJe7R6TpHzURYUVwKS70bq63DV49wjM/fQM
LuKWbqK8yTzUjqlASE0nE7CcIZy0BfQrvzyuSTe6zxzLGbrxMuX6/Bv+L7zrtWi4Ab+cxwAfYA2N
wxBf0PWVkfQ29PBOJ15FLks7E6eAVB3p2PjEP0Ca3GUvTAsAhQwq2c8qROyVlQBUOxdPMybGtWWp
QIUYm+OBa3ra1HgI0hf5SBfmI+azGw=X02fn
```

jira [mobile-app](https://www.atlassian.com/software/jira/mobile-app)

## confluence 同步 jira 用户数据

在jira 中添加用户服务器：用户管理 --->  jira 用户服务器 ---> 创建一个

在jira 中添加白名单，并允许传入 eg. `http://192.168.91.128:8090`

在confluence中配置对应的链接：用户目录 ---> 添加目录 ---> Atlassian jira --->

## 插件破解

查看破解参数：

> java -jar /root/jira/atlassian-agent.jar

第三方插件将其应用密钥/插件关键字作为`-p`参数。如：`-p 'com.gliffy.integration.confluence'` , -s 是jira 的服务器ID

```shell
# 破解 BigPicture
java -jar atlassian-agent.jar -p 'eu.softwareplant.bigpicture' -m sha.liu@qq.com -n liusha -o igg -s BCMU-4EII-52OB-A52W

AAABSA0ODAoPeJx9kctuwjAQRff+CktdO8SmQIpkqRCySAWkaqBdm3RILCVO8IOWfn0NhE1VIY03I
90zM8cPm8rhF6Ewi3A4ng5HU0Zxkm8wCxlFsQZhZasWwgI/d0hICYvQUhagDGxOHaxFAzzOVqvkL
U5nS5QcRe0uIb4XtQG0AFNo2V06W1XLRlr4xPWVgHcnXFnbmelg8FPJGgLZokyXQklzhciyRHGrr
ChsshKy5qYSQS3d8+EQFG2DwAWm3dsvoaGrhbLBTpadLKzTEPiMPAK32gHyWWVBCVVA8t1Jfepvi
p5IOPF1FwQ+qjstTQ/LQR9Bpws+j1db8pikKRmxbE5mI/aB1q7Zgc72WwPacEJvtv4f++p0UQkDf
xX3gt4946yB3d0vt0L7DXvjebLm/pElHVMaDYcTRiMa3SxePswL9B5/AfxurHIwLAIUB5UxzQIFh
wnEw8d9fMwa5kiq944CFDrm7CiVQs7KSt7QamMZ/QgwY2LtX02g8

```

## 通知方案

（不要用邮件通知、用插件 notifications 桌面通知）[邮件通知参考](https://community.atlassian.com/t5/Jira-questions/Using-Gmail-as-a-JIRA-Mail-Server/qaq-p/824782)

## 配置黑名单

```bash
vi /etc/hosts
...
www.atlassian.com 127.0.0.1
...
```

## nginx 代理

```bash
vi /opt/atlassian/jira/server.xml
......
        # ==============================================================================================================
        # HTTP - Proxying Jira via Apache or Nginx over HTTP
        # ==============================================================================================================
        # 注意：Connector port="8080" &&
	    # proxyName="jira5.skyunion.net" &&
        # proxyPort="80"

        <Connector port="8080" relaxedPathChars="[]|" relaxedQueryChars="[]|{}^&#x5c;&#x60;&quot;&lt;&gt;"
                   maxThreads="150" minSpareThreads="25" connectionTimeout="20000" enableLookups="false"
                   maxHttpHeaderSize="8192" protocol="HTTP/1.1" useBodyEncodingForURI="true" redirectPort="8443"
                   acceptCount="100" disableUploadTimeout="true" bindOnInit="false" scheme="http"
                   proxyName="jira5.skyunion.net" proxyPort="80"/>
......
# 注意：path="/"
<Context docBase="${catalina.home}/atlassian-jira" path="/" reloadable="false" useHttpOnly="true">
......

# ---------------- nginx ------------
......
    server {
        listen       80 default_server;
        server_name  jira5.skyunion.net;
		location /{
			proxy_set_header        Host $host:$server_port;
    		proxy_set_header        X-Real-IP $remote_addr;
    		proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
    		proxy_set_header        X-Forwarded-Proto $scheme;
    		proxy_pass              http://127.0.0.1:8080; 
    		client_max_body_size    10M;
    		proxy_set_header        X-Forwarded-Host $host;
    		proxy_set_header        X-Forwarded-Server $host;
    		# Required for new HTTP-based CLI
    		proxy_http_version 1.1;
    		proxy_request_buffering off;	
		}
    }
......

```

```bash
vi /opt/atlassian/confluence/conf/server.xml
......
        <Connector port="8091" connectionTimeout="20000" redirectPort="8443"
                   maxThreads="48" minSpareThreads="10"
                   enableLookups="false" acceptCount="10" debug="0" URIEncoding="UTF-8"
                   protocol="org.apache.coyote.http11.Http11NioProtocol"
                   scheme="http" proxyName="10.15.1.16" proxyPort="8090"/>
# <Context path="/" ......
......

# ---------------- nginx ------------
......
	server{
		listen 8090;
		server_name 127.0.0.1;
		location / {
			proxy_pass http://127.0.0.1:8091;
		}
	}
......
```
