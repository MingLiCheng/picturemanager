# ele-vue-picturemanager

> An electron-vue project

#### Build Setup

``` bash
# install dependencies
yarn 

# serve with hot reload at localhost:9080
yarn run dev


```

---

## 需求

本周的话，尽量可以基于electron和vue实现一个本地化的图片管理器，主要实现以下几个功能
1. 图片列表（显示软件存储目录下文件大小，名称）
2. 支持导入和导出功能，导入时，可以存放在本地某个固定文件夹下；导出的话调用electron api打开文件对话框选择路径
3. 打开独立窗口预览图片，可以用css方式支持图片的缩放查看

## 完成情况

| 图片列表 |      |      |
| -------- | ---- | ---- |
| 文件大小 |      |      |
| 文件名称 |      |      |
|          |      |      |

## 遇到问题

+ 路径问题

  electron-vue cli 中开发环境和发布环境使用不同的协议，发布会出现路径问题--**没解决**

+ 打开新窗口

  electron 打开新窗口进行渲染时，不会渲染单独的html文件 

  vue多页面没搞定
