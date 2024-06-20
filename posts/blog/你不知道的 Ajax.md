---
author: Ustinian
title: 你不知道的 Ajax
description: 你不知道的 Ajax
date: 2024-06-13
tags:
  - Javascript
---

## 前言

Ajax，全称 Asynchronous JavaScript and XML，是一种能够在不重新加载整个页面的情况下与服务器进行异步通信的技术，在日常开发的过程中，我们经常使用 Ajax 来进行数据交互，但有关它的一些概念，可能会时常混淆，例如：XHR、Fetch API、Axios、jQuery.ajax() 等，本文将介绍这些概念，并说明它们之间的区别和联系。

## 目录

### 一、Ajax

Ajax 是一种概念的统称，称为异步调用技术，实际上 AJAX = 异步 JavaScript 和 XML。Ajax 通过在后台与服务器进行少量数据交换，可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
我们所熟知的 XHR、Fetch API 是对 Ajax 概念的具体实现，而 jQuery.ajax()、axios 等异步请求的第三方库 是对 XHR 或 Fetch API 的封装。

### 二、XHR 和 Fetch API

#### 1. XHR

XMLHttpRequest (XHR) 是一种 API，用于在客户端与服务器之间进行交互。它最初是为处理 XML 数据而设计的，但它可以用于处理任何类型的数据，包括文本、JSON、二进制数据等。

一些基本概念：

- 异步通信： XHR 允许在不重新加载整个页面的情况下，异步地从服务器请求数据，并更新网页内容。这使得网页能够更加动态和响应迅速。
- HTTP 请求： 使用 XHR，可以发送各种类型的 HTTP 请求（如 GET、POST、PUT、DELETE 等），并接收服务器返回的响应数据。
- 状态管理： XHR 对象有不同的 readyState 和 status 属性，开发者可以根据这些属性来管理请求的不同阶段和响应状态。

实例代码：

```JavaScript
var xhr = new XMLHttpRequest()
xhr.open('GET', 'http://localhost:3000/data', true)
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
		var responseData = JSON.parse(xhr.responseText)
		console.log(responseData)
	}
}
xhr.send()
```

#### 2. Fetch API

Fetch API 是一个现代的 Web API，用于在客户端与服务器之间进行异步请求。它基于 Promise 机制，提供了一个更强大和灵活的接口来替代旧的 XHR。

- Promise 机制： Fetch API 使用 Promise 来处理异步操作，使得代码更简洁、可读性更高，并且避免了回调地狱的问题。
- 灵活性： Fetch API 支持各种类型的 HTTP 请求和响应处理，并且能够处理流式响应数据。
- 请求配置： 可以通过配置对象来设置请求的各种参数，如方法、头信息、请求体、credentials 等。

实例代码：

```JavaScript
fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// 或者使用 async/await
async function fetchData() {
    try {
        let response = await fetch('http://localhost:3000/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
```

#### 3. 两者的区别

一下是 XHR 和 Fetch API 之间的区别：

| 功能点        | XHR                                 | Fetch                                  |
| ------------- | ----------------------------------- | -------------------------------------- |
| 语法和复杂度  | 复杂，基于原生 Javascript           | 简洁，基于 Promise 机制                |
| 错误处理      | 复杂，需要在多个回调中检查和处理    | 简单，通过 `.catch()` 方法捕获和处理   |
| 响应处理      | 手动处理响应状态和数据格式          | 默认不解析 JSON，需调用 `.json()` 方法 |
| 同步/异步请求 | 都支持                              | 只支持异步请求                         |
| 请求配置      | 需要手动设置请求参数                | 支持通过配置对象设置请求参数           |
| 请求超时      | 通过 `xhr.timeout` 属性设置请求超时 | 不支持                                 |
| 浏览器支持    | 支持几乎所有浏览器，包括旧版本      | 不兼容 IE 浏览器，现代浏览器基本都支持 |
| 进度事件      | 支持，通过`xhr.onprogress` 监听     | 不支持，但可以通过 `Stream` 来实现     |

### 三、Axios

[Axios](https://www.axios-http.cn/) 是一个基于 `Promise` 网络请求库，作用于 `node.js` 和浏览器中。 它是 `isomorphic` 的(即同一套代码可以运行在浏览器和 node.js 中)。在服务端它使用原生 node.js `http` 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。

> 区别于 XHR 和 Fetch API，Axios 实际上是**基于 Promise 的封装 XHR 的异步 AJAX 请求库**

实例代码：

```JavaScript
import axios from 'axios'

axios.get('http://localhost:3000/data')
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.error(error)
    })

// 或者使用 async/await
async function fetchData() {
    try {
        let response = await axios.get('http://localhost:3000/data')
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}
fetchData()
```

有关 Axios 的使用实际上还包含很多方面，例如：请求拦截器、响应拦截器等等，这里就不一一介绍了。

### 四、jQuery.ajax()

jQuery.ajax() 是 jQuery 库中用于执行 AJAX 请求的方法。它提供了强大的功能来进行异步 HTTP 请求，如 GET 和 POST 请求，以及处理服务器返回的数据。jQuery.ajax() 是高度可配置的，可以通过传递各种选项来定制请求的行为。

#### 常用选项

- url: 请求的 URL 地址。
- type: 请求类型（如 "GET" 或 "POST"）。
- data: 发送到服务器的数据，可以是对象或字符串。
- dataType: 预期服务器返回的数据类型（如 "json", "xml", "html", "text"）。
- success: 请求成功时的回调函数。
- error: 请求失败时的回调函数。
- beforeSend: 在发送请求之前执行的函数。
- complete: 请求完成后（无论成功或失败）执行的函数。

> 同 Axios 一样，jQuery.ajax() 是**基于原生 XHR 封装的 AJAX 请求库**，但 JQuery.ajax() 只能运行于浏览器环境，它没有基于对 node.js 环境的封装。

实例代码：

```JavaScript
$.ajax({
    url: 'https://api.example.com/data',
    type: 'POST',
    data: {
        key1: 'value1',
        key2: 'value2'
    },
    dataType: 'json',
    beforeSend: function (xhr) {
        // 在请求发送之前可以设置自定义 HTTP 头
        xhr.setRequestHeader('Authorization', 'Bearer token');
    },
    success: function (response) {
        console.log('请求成功:', response);
    },
    error: function (xhr, status, error) {
        console.error('请求失败:', error);
    },
    complete: function (xhr, status) {
        console.log('请求完成');
    }
});
```

## 总结

Axios 是当前前端开发中最常用的 AJAX 请求库，基于 Promise 机制进行封装，使用简单且易于上手。它高度可配置，允许自定义各种请求参数和行为，并且支持请求拦截器和响应拦截器，功能非常强大。然而，在某些特殊情况下，例如需要兼容旧版本浏览器或使用不支持 Promise 的框架（如 Sciter），可以考虑使用 XHR 或 Fetch API 来发起 AJAX 请求。

需要注意的是，原生技术的能力决定了框架和库的边界。原生技术无法实现的功能，框架和库也无法实现。这在进行技术选型时尤为重要。
