/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-04-27 14:44:53
 * @LastEditors: Weize
 * @LastEditTime: 2021-04-27 14:49:54
 */
import axios from "axios"
import { Message } from "element-ui"
import store from "@/store"

// 创建axioc实例
const service = axios.create({
  baseURL: process.env.BASE_URL, // 请求url = baseURL + requestUrl
  timeout: 5000, // 请求超时时间
})

// 请求拦截
service.interceptors.request.use(
  (config) => {
    // 请求发送之前
    if (store.getters.token) {
      // 设置请求头token
      config.headers["token"] = getToken()
    }
    return config
  },
  (error) => {
    console.log(error) // 用于debug
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (response) => {
    const res = response.data
    // if the custom code is not 200, it is judged as an error.
    if (res.code !== 200) {
      Message({
        message: res.message || "Error",
        type: "error",
        duration: 5 * 1000,
      })
      return Promise.reject(new Error(res.message || "Error"))
    } else {
      return Promise.resolve(res)
    }
  },
  (error) => {
    console.log("err" + error) // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  }
)

export default service
