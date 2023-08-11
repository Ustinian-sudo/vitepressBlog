# WampServer 相关问题

> wampserver 版本 3.2.6 64 Bits，系统 windows 10

## Apache

> Apache 版本 2.4.51

### 权限设置问题

1. 进入 httpd.conf 中,找到`<Directory/>`标签,修改成如下

```plaintext
<Directory />
    Options FollowSymLinks
    AllowOverride None
    Order deny,allow
    Require all granted
</Directory>
```

2. 继续找到`<Directory "${INSTALL_DIR}/www/">`标签,修改

```plaintext
Required local -> Require all granted
```

3. 进入 httpd-vhosts.conf,同 2 一样修改

>注意：若依旧无法访问，需要查看本地的防火墙是否关闭，若不想关闭防火墙，可以添加入站规则，放开apache的端口，提供外网访问。

## Mysql

> MySQL 版本 5.7.36

### root 密码修改

> wampserver 默认情况下 mysql 的 root 密码为空。

修改步骤如下：

1. 打开 phpMyadmin,选择 MySQL 服务器直接登录。
2. 点击界面上的账户

![image-20230321163802852](https://qiniu.ustinian077.top/image-20230321163802852.png)

3. 勾选 root 用户后，选择修改权限

![image-20230321163848103](https://qiniu.ustinian077.top/image-20230321163848103.png)

4. 选择 Change password(修改密码)，输入密码后执行。

![image-20230321164305078](https://qiniu.ustinian077.top/image-20230321164305078.png)

## PHP

> PHP 版本 7.4.26

### 连接 SQL Server 数据库

1. 安装SQL Server

看该篇博客作者里面讲得十分详细[安装SQL Server详细教程_sql server安装教程_toMontain的博客-CSDN博客](https://blog.csdn.net/qq_43884946/article/details/123312148)

2. 根据自己的PHP版本下载对应的Microsoft SQL Server PHP 驱动程序

在微软的官方地址这[Microsoft Drivers for PHP 发行说明 - PHP drivers for SQL Server | Microsoft Learn](https://learn.microsoft.com/zh-cn/sql/connect/php/release-notes-php-sql-driver?view=sql-server-ver16)根据自己的版本号找到对应的驱动程序，我自己的版本是`7.4.26` 因此下载`5.10`版本的驱动程序

![image-20230323165519502](https://qiniu.ustinian077.top/image-20230323165519502.png)

3. 解压文件

在下载好的压缩包中，找到`php_pdo_sqlsrv_74_ts_x64.dll`、`php_sqlsrv_74_ts_x64.dll`这两个文件。放到`C:\wamp64\bin\php\php7.4.26\ext`该位置。

>注意：ts 代表的是线程安全 nts 代表的是线程不安全 根据自己的需要选择，一般选择ts版本。x64 代表 64bit 根据自己电脑系统来选择。

![image-20230323170104420](https://qiniu.ustinian077.top/image-20230323170104420.png)

4. 配置`php.ini`

左键点击wampserver图标，打开PHP下的`php.ini`文件。搜索`extension`找到

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

5. 重启wampserver，测试效果

打开apache网页，http://localhost:8080/?phpinfo=-1 (端口号自己定义的)，搜索sqlsrv看到`pdo_sqlsrv`信息代表引入拓展成功

![image-20230323171521557](https://qiniu.ustinian077.top/image-20230323171521557.png)

6. 代码测试

> 注意：若电脑未安装SQL Server ODBC驱动程序，则需要自行安装下ODBC驱动源，地址：[下载 ODBC Driver for SQL Server - ODBC Driver for SQL Server | Microsoft Learn](https://learn.microsoft.com/zh-cn/sql/connect/odbc/download-odbc-driver-for-sql-server?view=sql-server-ver16)下载最新版本即可。

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

![image-20230323172529493](https://qiniu.ustinian077.top/image-20230323172529493.png)