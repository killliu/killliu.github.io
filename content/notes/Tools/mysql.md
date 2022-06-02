---
title       			: "mysql"
date        			: 2020-02-11T12:29:23+08:00
tags        			: [Tools]
toc                     : true
disableTitleSeparator   : true
draft                   : false
---

## centos7

### 卸载清除

> yum remove mysql-community-server	

找出 mysql 软件包

> rpm -pa|grep mysql

使用 rpm -e pacakge_name 或 yum remove package_name 依次删除

**`eg.`**  rpm -e pacakge_name

找出 mysql 配置文件

> find / -name mysql

使用 rm -rf 依次删除配置文件 config_path

**`eg.`** rm -rf config_path

找出 MariaDB 软件包

> rpm -pa|grep mariadb

使用 rpm -e mariadb_name

**`error:`** 提示被 postfix 需要

使用强制删除

> rpm -e --nodeps mariadb_name

继续删除， 最后一列带@符号的是已经安装的，base是系统自带的

> yum list | grep mysql

移除

> yum remove 第一列的名字
>
> yum clean all

### 安装

[下载地址](https://downloads.mysql.com/archives/community/)

[mysql-5.7.32-1.el7.x86_64.rpm-bundle.tar](https://downloads.mysql.com/archives/get/p/23/file/mysql-5.7.32-1.el7.x86_64.rpm-bundle.tar)

```shell
mkdir /root/mysql
cd /root/mysql
tar -vxf mysql-8.0.18-1.el7.x86_64.rpm-bundle.tar
rpm -ivh mysql-community-common-8.0.18-1.el7.x86_64.rpm
rpm -ivh mysql-community-libs-8.0.18-1.el7.x86_64.rpm
rpm -ivh mysql-community-client-8.0.18-1.el7.x86_64.rpm
rpm -ivh mysql-community-server-8.0.18-1.el7.x86_64.rpm
```

**`error:`** libcrypto.so.10 is needed

> dnf install compat-openssl10

**`error:`4** mariadb-libs is obsoleted by mysql-community-libs-8.0.18-1.el7.x86_6

清除之前安装过的依赖

> yum remove mysql-libs

**`error:`** net-tools is needed by mysql-community-server-8.0.18-1.el7.x86_64

> yum install net-tools

**`error:`** perl is needed ...

> yum install -y perl

**`error:`** libncurses.so.5 is needed ...

> yum install libncurses*

**`error:`** libc.so.6(GLIBC_2.14)(64bit) is needed ...

```sh
mkdir /root/lib
cd /root/lib
wget http://ftp.gnu.org/gnu/glibc/glibc-2.14.tar.gz
tar zxvf glibc-2.14.tar.gz
cd glibc-2.14
mkdir build
cd build
../configure --prefix=/opt/glibc-2.14
make
make install
```

### 开启服务

```shell
# 初始密码
systemctl start mysqld.service
# 登录 mysql
cat /var/log/mysqld.log | grep password
mysql -u root -p
# 修改初始密码
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'your_password';
```

### 开机启动

```shell
systemctl enable mysqld.service
systemctl restart mysqld.service
```

### 创建数据库

```mysql
create database your_database_name;
use your_database_name;
set names utf8;
source /root/xxx.sql;
```

### 增加表

```mysql
USE `pm`;
DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `uid` VARCHAR(18) DEFAULT NULL COMMENT 'UID',
  `loginname` VARCHAR(16) DEFAULT NULL COMMENT 'Loginname',
  `name` VARCHAR(16) DEFAULT NULL COMMENT 'Name',
  `department` INT DEFAULT NULL COMMENT 'Department',
  `job` INT DEFAULT NULL COMMENT 'Job',
  `group` INT DEFAULT NULL COMMENT 'Group',
  `password` VARCHAR(32) DEFAULT NULL,
  `alive` INT(1) DEFAULT NULL COMMENT 'Alive',
  `created` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT  INTO `user`(`id`, `uid`,`loginname`,`name`,`password` ,`department`,`job`,`group`,`alive`,`created`) VALUES (1,'7850101313536','killliu','刘沙','4b95d6e9931e6fd86d0f1fd13d3d232d',5,99,99,1,'2020-02-11 12:22:55');
```

```mysql
USE `pm`;
DROP TABLE IF EXISTS `group`;

CREATE TABLE `group` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
   `department` INT DEFAULT NULL COMMENT 'Department',
 `name` VARCHAR(16) DEFAULT NULL COMMENT 'Name',
  PRIMARY KEY (`id`)
) ENGINE=INNODB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT  INTO `group`(`id`,`department`,`name`) VALUES (1,0,'打杂组');
```

### 增加字段

```mysql
USE `pm`;
# 删除列
ALTER TABLE `users` drop COLUMN `avatar`;
# 在 password 列后面插入 avatar 数据列
ALTER TABLE `users` ADD COLUMN `avatar` INT DEFAULT 0 AFTER `password`;
```

### 增加数据

```mysql
INSERT INTO `users` (`id`, `uid`, `loginname`, `name`, `department`, `job`, `group`, `password`, `alive`, `created`) VALUES('1','7850101313536','killliu','刘沙','5','99','99','4b95d6e9931e6fd86d0f1fd13d3d232d','1','2020-02-11 12:22:55');
```

## Mac

[官网](https://dev.mysql.com/downloads/mysql/) 下载DMG安装包

偏好设置 -> 设置管理

**`error:`** mysql command not found

> PATH=$PATH:/usr/local/mysql/bin

登陆 mysql

mysql -u root -p

## **`Errors`**

### host 'tclient' is not allowed to connect to this mysql server

```mysql
use mysql;
update user set host='%' where user='root';
flush privileges;
```

### Plugin caching_sha2_password could not be loaded

```mysql
#修改加密规则
ALTER USER 'root'@'%' IDENTIFIED BY 'iGG2021RD5(666)' PASSWORD EXPIRE NEVER; 
#更新用户的密码
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'iGG2020RD5()'; 
#刷新权限
FLUSH PRIVILEGES;
#重置密码
ALTER USER 'root'@'%' IDENTIFIED BY 'your_password';
```

### operation alter user failed for 'root'@'localhost'

### SQLyog: Plugin caching_sha2_password could not be loaded

```mysql
use mysql;
select user,host from user;
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'iGG2021RD5(666)';
```

### 1045：Access denied for user 'root'@'localhost'

注：如果 select user,host from user; 显示 root 是 %，则不能用localhost或127.0.0.1登陆，要改为本地的IP地址

> ALTER USER 'root'@'localhost' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY 'your_password';
