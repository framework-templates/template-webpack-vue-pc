/*
 * @Author: your name
 * @Date: 2021-04-25 09:47:37
 * @LastEditTime: 2021-05-07 16:13:12
 * @LastEditors: Weize
 * @Description: In User Settings Edit
 * @FilePath: \my-project\webpack\webpack-base\src\plugin\element.js
 */
import Vue from "vue"
import { Header, Container, Footer, Input } from "element-ui"

Vue.prototype.$ELEMENT = { size: "small", "  zIndex": 3000 }
Vue.use(Header)
  .use(Container)
  .use(Footer)
  .use(Input)
