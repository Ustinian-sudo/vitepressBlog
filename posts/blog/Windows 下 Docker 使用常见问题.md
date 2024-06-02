---
author: Ustinian
title: Windows 下 Docker 使用常见问题
description: Windows 下 Docker 使用常见问题
date: 2024-04-15
tags:
  - Docker
---

## 前言

本文记录了个人 Docker 的使用过程中遇到常见的问题，以及对应的解决方法。

## 问题

### 1. error during connect: this error may indicate that the docker daemon is not running

在使用 docker run/pull 等指令时出现下面的报错信息：

```cmd
Using default tag: latest
error during connect: this error may indicate that the docker daemon is not running: Post "http://%2F%2F.%2Fpipe%2Fdocker_engine/v1.24/images/create?fromImage=hlohaus789%2Fg4f&tag=latest": open //./pipe/docker_engine: The system cannot find the file specified.
```

该报错是因为未开启 docker 守护进程（deamon）导致的，开启的方式很简单，Docker Desktop for Windows 包含了一个内置的 Docker 守护进程。当你启动 Docker Desktop 应用程序时，守护进程也会自动启动。
