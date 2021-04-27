/*
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-04-22 14:53:45
 * @LastEditors: Weize
 * @LastEditTime: 2021-04-23 14:43:47
 */
const { merge } = require('webpack-merge')
const config = require('./config')
const env = 'development'
const mode = 'production'
module.exports = merge(config({ env, mode }), {
  mode,//打包模式
  devtool: 'eval-source-map',//映射原代码调试
})
