/*
 * @Descripttion: 打包分析
 * @Author: Weize
 * @Date: 2021-04-22 14:53:45
 * @LastEditors: Weize
 * @LastEditTime: 2021-04-23 14:43:47
 */

// 引入分析依赖包插件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const portfinder = require('portfinder')
const { merge } = require('webpack-merge')
const config = require('./config')
const env = 'production'
const mode = 'production'
module.exports = merge(config({ env, mode }), {
  mode,//打包模式
  plugins: [
    // 配置分析
    new BundleAnalyzerPlugin({
      analyzerPort: async () => await portfinder.getPortPromise()
    })
  ]
})
