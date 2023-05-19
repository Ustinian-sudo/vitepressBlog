# Go + Vscode 开发环境搭建

## 零、前言

 最近萌生了想要转型的想法，来学一门后端语言，之前是用 node 作为后端语言，平常做做小项目用 node 还是挺方便的，但是考虑到国内招 node 的岗位不多，Java 卷的缘故，而且听说 go 做后端在性能方面有较大的提升，就打算来尝试学习一下。

 结果，万事开头难，上来安装就给网上五花八门的博客给拦住了，就自己查找资料记录了一下。

## 一、前提准备

> 这里需要安装三个准备工具 git、go、vscode，下面是三个安装包的官方地址，本文主要是 Go 的安装教程，所以这里就不介绍 git、vscode 的安装了。

官方地址：

-   Git：[Git for Windows](https://gitforwindows.org/)，推荐国内镜像：[CNPM Binaries Mirror (npmmirror.com)](https://registry.npmmirror.com/binary.html?path=git-for-windows/)
-   Vscode：[Visual Studio Code - Code Editing. Redefined](https://code.visualstudio.com/)
-   Go：后边介绍

## 二、环境安装

### 1. 安装 go 环境

> 根据自己的需要选择相应的版本，我的是 win10 64bit 系统，安装包为`go1.20.3.windows-arm64.msi`

-   下载地址

    -   官方地址：https://golang.org/dl/
    -   打开较慢可以用这个：https://golang.google.cn/dl/

-   各个系统对应的包名

| 操作系统 | 包名                              |
| -------- | --------------------------------- |
| Windows  | go1.20.3.windows-amd64.msi        |
| Linux    | go1.20.3.linux-amd64.tar.gz       |
| Mac      | go1.20.3.darwin-amd64-osx10.8.pkg |

-   安装方法
    -   打开 msi 包，选择自己想要安装的目录，无脑下一步即可。

### 2. 配置环境变量

> 默认情况下，最新版本的 Go 环境会自动帮你配置好环境变量。若没有，配置方法也很简单。

 打开 此电脑 -> （右键）属性 - 高级系统设置 - 环境变量 - 双击 path 变量，新增变量路径（这里我的是`C:\Program Files\Go\bin`，根据自己安装的 go 的 bin 目录位置决定）

 打开控制台（win+r，输入 cmd，回车），输入 go version，就可以看到 go 的版本信息了。

![image-20230412111807414](http://qiniu.ustinian077.top/image-20230412111807414.png)

### 3. 配置 GOPATH 工作目录（可跳过）

> 在 1.11 版本之前，开发的时候需要将依赖包引入到`$GOPATH/src`下，为了管理自己的包和源码，就需要去配置 GOPATH。在 1.11 版本之后，推出了一种新的方式 go mod（modules）去管理，它跟 npm 很像，可以通过命令行的方式去管理依赖，而无需将源码移动到 GOPATH 工作目录下去开发。

 自定义创建 GOPATH 目录，例如：E:\gowork，并在目录下创建 src、pkg、bin 三个文件夹。

![img](http://qiniu.ustinian077.top/1235697-20190218223030338-1867662830.png)

 打开 我的电脑 - （右键）属性 - 高级系统设置 - 环境变量，新增一个系统环境变量 GOPATH。

![img](http://qiniu.ustinian077.top/1235697-20190218225425690-1353699465.png)

 打开控制台(win+r,输入 cmd，按回车)，输入 go env 查看 go 配置信息，

![img](http://qiniu.ustinian077.top/1235697-20190218230016332-1394149958.png)

> 注意：如果 GOPATH 没有变成我们配置的路径，可以重启下电脑 or 等，至于为什么，不清楚~，大概是系统还没更新到最新的参数吧。

### 4. 常用的 god mod 命令











## 三、Vscode 的 Go 环境搭建

1. 安装拓展

 点击 Extensions - 搜索 Go - 下载

![image-20230412144953871](http://qiniu.ustinian077.top/image-20230412144953871.png)

2. 安装第三方依赖

 创建一个`hello.go`文件，内容如下：
git
```go
package main

import "fmt"

func main() {
	fmt.Println("hello world!")
}

```

 此时，当你保存文件的时候会有提示要安装第三方依赖，点击 install all 即可。或者在 Vscode 里面按下`ctrl+shift+p`键找到`Go:Install/Update Tools`，勾选所有，点击 OK 即可。

![image-20230412145329956](http://qiniu.ustinian077.top/image-20230412145329956.png)

3. 全球模块代理

> 如果，上面速度很慢，安装失败的话，可以尝试开启全球模块代理来下载。

 在桌面按住`shift`右键打开`Powershell`窗口，输入以下内容：

```cmd
$env:GO111MODULE=“on”

$env:GOPROXY=“https://goproxy.io”

go env -w GOPROXY=https://goproxy.io,direct

go env -w GOPRIVATE=*.corp.example.com
```

 接着再重复上面安装的操作即可。
