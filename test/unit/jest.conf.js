/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-04-27 21:43:14
 * @LastEditors: Weize
 * @LastEditTime: 2021-04-27 23:36:47
 */
const path = require("path")

module.exports = {
  verbose: true,
  testURL: "http://localhost/",
  rootDir: path.resolve(__dirname, "../../"),
  //匹配文件类型
  moduleFileExtensions: ["js", "json", "vue"],
  //设置别名
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  //匹配单元测试文件
  testMatch: ["<rootDir>/test/unit/**/*.spec.js"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
  },
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  //是否描述覆盖文件
  collectCoverage: true,
  //覆盖率目录
  coverageDirectory: "<rootDir>/test/unit/coverage",
  //需要做测试的文件目录匹配
  // collectCoverageFrom: [
  //   "src/views/**/*.(js|vue)",
  //   "!src/main.js",
  //   "!src/router/index.js",
  //   "!node_modules/**",
  // ],
}
