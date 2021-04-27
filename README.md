<!--
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-04-22 09:04:17
 * @LastEditors: Weize
 * @LastEditTime: 2021-04-27 23:42:42
-->

[![npm]][npm-url]
[![node]][node-url]

# webpack-vue-element-template

> 基于 webpack、vue 全家桶、element-ui 实现的一套从 0 开始的开箱即用的 PC 框架

<h2 align="center">已实现</h2>

- .env 环境变量，可根据不同环境访问不同 api
- jest单元测试
- elemetn按需引入
- 命令打包分析模块
- webpack热替换
- 已兼容 IE9 及以上和主流浏览器
- 开箱即用

## 使用步骤

```bash
# 安装依赖
npm install

# 使用webpack启动服务
npm run serve

# 使用webpack打包多个环境
npm run build:dev
or
npm run build:test
or
npm run build:prod

# 使用单元测试
npm run test:unit

# 打包分析
npm run build:analyzer

```

[npm]: https://img.shields.io/badge/npm-v5.3.1-green
[npm-url]: https://www.npmjs.com
[node]: https://img.shields.io/badge/node->%3D10.13.0-green
[node-url]: http://nodejs.cn/
