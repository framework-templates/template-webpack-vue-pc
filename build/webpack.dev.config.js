/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-04-22 14:53:45
 * @LastEditors: Weize
 * @LastEditTime: 2021-04-27 18:02:55
 */
const { merge } = require("webpack-merge")
// 端口生成器
const portfinder = require("portfinder")
portfinder.basePort = 8080
const config = require("./config")
const env = "dev"
const mode = "development"
module.exports = merge(
  config({
    env,
    mode,
  }),
  {
    mode, //打包模式
    // devtool: "eval-source-map", //映射原代码调试
    devtool: "eval",
    devServer: {
      overlay: true, // 当运行webpack-dev-server去做打包的时候，一旦遇到语法规范的问题，就会在页面弹出层提示我们
      open: true, //自动打开浏览器
      port: (async () => await portfinder.getPortPromise())(), //端口号自增
      hot: true, //热替换
      inline: true, //热更新
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            "^/api": "",
          },
        },
      },
    },
  }
)
