---
author: Ustinian
title: WampServer 相关问题
description: WampServer 相关问题
date: 2023-10-09
tags:
  - PHP
---

## wampserver

> wampserver 版本 3.2.6 64 Bits，系统 windows 11

## Apache

> Apache 版本 2.4.51

### 权限设置

1. 进入 httpd.conf 中，找到`<Directory/>`标签，修改成如下

```ini
<Directory />
    Options FollowSymLinks
    AllowOverride None
    Order deny,allow
    Require all granted
</Directory>
```

2. 继续找到`<Directory "${INSTALL_DIR}/www/">`标签，修改

```ini
Required local -> Require all granted
```

3. 进入 httpd-vhosts.conf，同 2 一样修改

> 注意：若依旧无法访问，需要查看本地的防火墙是否关闭，若不想关闭防火墙，可以添加入站规则，放开 apache 的端口，提供外网访问。

### 开启 HTTPS

1. 生成自签名证书

自签名的证书可以通过 `apache` 的 `bin` 目录下的 `openssl.exe` 来生成，也可以自行去找到 [OpenSSL](https://www.openssl.org/) 官网下载。这里我推荐使用官网的下载工具来创建 OpenSSL 证书。原因是 `wampserver` `apache` 默认的 `openssl.exe` 版本过低，可能会出现一些问题。

有关 `OpenSSL` 如何生成自签名证书，可以参考我另外一篇文章[OpenSSL 的使用详解](./OpenSSL%20的使用详解.md)

2. 进入 `httpd.conf` 文件，找到下面这三个，把它们前面的注释符号#去掉：

```ini
# Include conf/extra/httpd-ssl.conf
# LoadModule ssl_module modules/mod_ssl.so
# LoadModule socache_shmcb_module modules/mod_socache_shmcb.so
```

3. 进入 `httpd-ssl.conf` 文件，找到下面这两个，修改它们的参数：

```ini
# 注意这里要保证 conf 下存在自己生成好的证书
SSLCertificateFile "${SRVROOT}/conf/server.crt"
SSLCertificateKeyFile "${SRVROOT}/conf/server.key"
```

4. HTTPS 连接默认使用 `443` 端口，需要配置虚拟主机，在 `httpd-vhosts.conf` 文件中添加如下代码：

```ini
<VirtualHost *:443>
    ServerName test
    ServerAlias localhost
    DocumentRoot "${INSTALL_DIR}/www"
    SSLEngine on
    SSLCertificateFile "${SRVROOT}/conf/server.crt"
    SSLCertificateKeyFile "${SRVROOT}/conf/server.key"
</VirtualHost>
```

5. 重启 apache 服务

### 多端口对应多项目

1. 进入 httpd-vhosts.conf 文件，添加如下代码：

```ini
listen 9999 # wampserver 添加多监听一个 9999 端口
<VirtualHost *:9999>
  # 开启 HTTPS
  SSLEngine on
  SSLCertificateFile "${SRVROOT}/conf/server.crt"
  SSLCertificateKeyFile "${SRVROOT}/conf/server.key"
	ServerName localhost
  # 设置站点目录
	DocumentRoot "${INSTALL_DIR}/www/TEST"
	<Directory  "${INSTALL_DIR}/www/TEST/">
		Options +Indexes +Includes +FollowSymLinks +MultiViews
		AllowOverride All
		Require local
	</Directory>
</VirtualHost>
```

2. 重启 apache 服务，网页访问 http://localhost:9999

## PHP

> PHP 版本 7.4.26

### 开启 php 扩展

## Mysql

> MySQL 版本 5.7.36

### root 密码修改

> wampserver 默认情况下 mysql 的 root 密码为空。

修改步骤如下：

1. 打开 phpMyadmin，选择 MySQL 服务器直接登录。
2. 点击界面上的账户

![image-20230321163802852](http://qiniu.ustinian077.top/image-20230321163802852.png)

3. 勾选 root 用户后，选择修改权限

![image-20230321163848103](http://qiniu.ustinian077.top/image-20230321163848103.png)

4. 选择 Change password(修改密码)，输入密码后执行。

![image-20230321164305078](http://qiniu.ustinian077.top/image-20230321164305078.png)

## PHP

> PHP 版本 7.4.26

### 连接 SQL Server 数据库

1. 安装 SQL Server

看该篇博客作者里面讲得十分详细[安装 SQL Server 详细教程\_sql server 安装教程\_toMontain 的博客-CSDN 博客](https://blog.csdn.net/qq_43884946/article/details/123312148)

2. 根据自己的 PHP 版本下载对应的 Microsoft SQL Server PHP 驱动程序

在微软的官方地址这[Microsoft Drivers for PHP 发行说明 - PHP drivers for SQL Server | Microsoft Learn](https://learn.microsoft.com/zh-cn/sql/connect/php/release-notes-php-sql-driver?view=sql-server-ver16)根据自己的版本号找到对应的驱动程序，我自己的版本是`7.4.26` 因此下载`5.10`版本的驱动程序

![image-20230323165519502](http://qiniu.ustinian077.top/image-20230323165519502.png)

3. 解压文件

在下载好的压缩包中，找到`php_pdo_sqlsrv_74_ts_x64.dll`、`php_sqlsrv_74_ts_x64.dll`这两个文件。放到`C:\wamp64\bin\php\php7.4.26\ext`该位置。

> 注意：ts 代表的是线程安全 nts 代表的是线程不安全 根据自己的需要选择，一般选择 ts 版本。x64 代表 64bit 根据自己电脑系统来选择。

![image-20230323170104420](http://qiniu.ustinian077.top/image-20230323170104420.png)

4. 配置`php.ini`

左键点击 wampserver 图标，打开 PHP 下的`php.ini`文件。搜索`extension`找到

```ini
;extension=odbc
extension=openssl
;extension=pdo_firebird
extension=pdo_mysql
;extension=pdo_oci
;extension=pdo_odbc
;extension=pdo_pgsql
extension=pdo_sqlite
;extension=pgsql
;extension=phpdbg_webhelper
;extension=shmop
extension=php_pdo_sqlsrv_74_ts_x64.dll
extension=php_sqlsrv_74_ts_x64.dll
; 在末尾添加上面两行代码，引入拓展
```

5. 重启 wampserver，测试效果

打开 apache 网页，http://localhost:8080/?phpinfo=-1 (端口号自己定义的)，搜索 sqlsrv 看到`pdo_sqlsrv`信息代表引入拓展成功

![image-20230323171521557](http://qiniu.ustinian077.top/image-20230323171521557.png)

> 注：若配置`php.ini`不生效，再到 wamp64 的 bin 目录下找到 php 所对应的版本修改其`phpForApache.ini`文件后，重新启动一遍，修改步骤同 4 相同

6. 代码测试

> 注：若电脑未安装 SQL Server ODBC 驱动程序，则需要自行安装下 ODBC 驱动源，地址：[下载 ODBC Driver for SQL Server - ODBC Driver for SQL Server | Microsoft Learn](https://learn.microsoft.com/zh-cn/sql/connect/odbc/download-odbc-driver-for-sql-server?view=sql-server-ver16)下载最新版本即可。

代码测试如下：

```php
<?php
$serverName = "localhost"; //数据库服务器地址
$uid = "sa";     //数据库用户名
$pwd = "123456"; //数据库密码
$connectionInfo = array("UID"=>$uid, "PWD"=>$pwd, "Database"=>"test");
$conn = sqlsrv_connect($serverName, $connectionInfo);
if( $conn == false)
{
    echo "连接失败！";
    var_dump(sqlsrv_errors());
    exit;
}else{
    echo "链接成功";
}
```

效果图如下：

![image-20230323172529493](http://qiniu.ustinian077.top/image-20230323172529493.png)
