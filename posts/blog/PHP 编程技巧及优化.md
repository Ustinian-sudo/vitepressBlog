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

