# 花菜记账 1.0
>demo地址:[https://gitgundam.gitee.io/cash-app-website](https://gitgundam.gitee.io/cash-app-website)

花菜记账是一款使用Vuejs技术栈开发,基于**Vue,VueRouter,VueX,TypeScript**的单页面多组件应用.

该项目功能由本人独立设计及实现,期间遇到了很多webpack,TypeScript相关的问题,解决过程记录在本人的博客中[https://github.com/gitgundam/BLOG/issues](https://github.com/gitgundam/BLOG/issues)

这个记账应用了许多vue.js提供的新特性, 包括slot插槽, mixin混入等高级语法, 同时在未引入第三方库的情况下自己实现了个简易的计算器的界面.

## 技术栈
vue2 + vue-router + vuex + typescript + echarts.js + svg

## 后续计划
这个项目是一个非常基础的雏形,后续可以基于这个项目开发更多功能.因为暂时数据是储存在本地功能的,因此后续计划:
- 现阶段暂时未引入日历组件,接下来我会造个日历轮子,然后在项目中引入
- 在项目拥有更多功能后,尝试将数据库部署在服务器上,引入个人用户登入注册更能.
- 为更好更方便的适配设备,用制作一个小程序版的记账
- 等

## 启动方式
``` bash
$ git clone git@github.com:gitgundam/cash-app.git

$ npm install

### Compiles and hot-reloads for development
$ npm run serve

### Compiles and minifies for production
$ npm run build
$ npm run start
```


