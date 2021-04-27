/*
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-04-22 14:49:50
 * @LastEditors: Weize
 * @LastEditTime: 2021-04-25 18:48:13
 */
const { merge } = require('webpack-merge')
const config = require('./config')
const env = 'production'
const mode = 'production'
module.exports = merge(config({ env, mode }), {
  mode,//打包模式
})
