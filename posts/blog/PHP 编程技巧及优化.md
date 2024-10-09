---
author: Ustinian
title: PHP 编程技巧及优化
description: PHP 编程技巧及优化
date: 2024-04-10
tags:
  - PHP
---

## 前言

该栏目记录了一些我自己平常开发中遇到的疑难杂症，以及一些自己平时积累的编程技巧和优化。

## 目录

> 注：PHP 版本为 8.0.10

### 1. 使用 curl 发送携带 Body 参数的 GET 请求

PHP 使用 curl 发送携带 Body 参数的 GET 请求，直接设置 `curl_setopt($ch, CURLOPT_POSTFIELDS, $data);` 方法来设置 Body 参数，是无法发送过去的。 需要将 GET 方法设置成自定义 GET 请求，`curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");`，才可以发送 Body 参数。示例代码如下：

```PHP
function http_request($url,$method, $header = array(), $request_data = "", $config = array())
{
    $option = array(
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_VERBOSE => FALSE,
        CURLOPT_HEADER => TRUE,
        CURLOPT_SSL_VERIFYPEER => FALSE,
        CURLOPT_SSL_VERIFYHOST => FALSE
    );
    // POST方法设置
    if(strtoupper($method) === "POST")
    {
        $option[CURLOPT_POST] = TRUE;
    }
    // GET方法设置
    if(strtoupper($method) === "GET")
    {
        $option[CURLOPT_CUSTOMREQUEST] = "GET";
    }
    // 设置自定义请求头
    if(!empty($header))
    {
        $option[CURLOPT_HTTPHEADER] = $header;
    }
    // 设置body请求体
    if(!empty($request_data))
    {
        $option[CURLOPT_POSTFIELDS] = $request_data;
    }
    foreach ($config  as $key => $value)
    {
        $option[$key] = $value;
    }
    $result = array();
    $ch = curl_init();
    curl_setopt_array($ch, $option);
    $response = curl_exec($ch);
    $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
    $result['content'] = substr($response, $header_size);
    $result['http_code'] = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    return $result;
}
$data = array(
    "id" => "921633BC9D75"
)
$headers = array(
    'Content-Type: application/json; charset=utf-8',
)
$params = json_encode($data,JSON_UNESCAPED_UNICODE);
http_request("http://example.com", "GET", $headers, $params);
```

### 2. PHP 脚本先快速返回响应给客户端，后台再执行一些长时间的任务

PHP 程序执行一般是单线程的，在处理一个需要较长时间完成的任务时，为了能够立即返回一个成功响应给客户端，而不会让客户端等待，就可以采用下面这两种方法：

（1）通过设置请求头，告诉浏览器不要等待脚本执行完成，立即返回

```php
function keep_connection() {
        @ob_end_clean();
        @ob_start();
        echo json_encode(array('code' => 0));
        echo str_repeat(" ", 4096);
        $size = ob_get_length();
        @header("Content-Length: $size");
        @header('Connection: close'); // 通知客户端服务器将关闭连接
        @header("HTTP/1.1 200 OK");
        @header("Content-Type: text/html;charset=utf-8");
        @ob_end_flush();
        if (@ob_get_length())
            @ob_flush(); // 刷新缓冲区，将其发送到客户端。
        @flush();
        ignore_user_abort(true); // 客户端断开连接，PHP 脚本也将继续执行
        session_write_close();
        set_time_limit(604800);
        ini_set('memory_limit', -1); // 取消内存限制，允许脚本使用尽可能多的内存。
}
```

（2）通过 curl 设置较短的超时时间，让脚本在超时后自动退出

```php
public function quick_response()
{
    // 立即返回成功响应
    $response = [
        'status' => 'success',
        'message' => 'Task has been received and will be processed shortly.'
    ];
    echo json_encode($response);
    $url = "http://example.com/task.php";
    // 后台执行延迟任务
    $this->http_request($url);
}

public function http_request($url)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_TIMEOUT_MS, 600);  // 600ms后超时返回
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);

    // 任务处理逻辑
    $this->my_task();

    // 关闭cURL资源
    curl_close($ch);
}
```

### 3. 字符串和数字之间的比较规则

PHP 中，字符串和数字之间的比较有点诡异，规则如下：

- 数字开头的字符串：如果字符串以数字开头，那么字符串开头的数字部分会被转换成整数值，直到遇到非数字字符。
- 非数字字符串：如果字符串不以数字开头，那么它会被转换为整数值 0。

> 为了避免这种隐式类型转换带来的问题，建议在进行比较时，使用严格比较运算符（===），或者直接比较字符串 '0'

```php
var_dump('123abc' == 123);     // true
var_dump('abc123' == 0);       // true
var_dump('abc' == 0);          // true
var_dump('abc' === 0);         // false
var_dump('abc' == '0');        // false
```
