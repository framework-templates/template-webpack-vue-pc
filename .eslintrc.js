module.exports = {
  extends: ["plugin:vue/essential"], //使用eslint-plugin-vue
  plugins: ["vue"],
  parserOptions: {
    parser: "babel-eslint", //解析器之
    ecmaVersion: 2017, //emcaVersion用来指定你想要使用的 ECMAScript 版本
    sourceType: "module", // 设置为 "script" (默认)或"module"（如果你的代码是 ECMAScript 模块)
  },
  env: {
    es6: true,
    node: true,
  },
  globals: {
    document: false,
    navigator: false,
    window: false,
  },
  rules: {
    // 0 = off, 1 = warn, 2 = error
    "quote-props": 0,
    "dot-notation": 0,
    "consistent-return": 0,
    "no-multiple-empty-lines": 0,
    "prefer-arrow-callback": 0,
    "wrap-iife": 0,
    "no-undef-init": 0,
    "no-new-wrappers": 0,
    "linebreak-style": 0,
    "max-len": [0, 160],
    "lines-between-class-members": 0,
    "prefer-const": 0,
    "no-plusplus": 0,
    "comma-dangle": 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "prefer-template": 0,
    "no-else-return": 0,
    "object-curly-newline": 0,
    "no-bitwise": 0,
    "max-classes-per-file": 0,
    "class-methods-use-this": 0,
    "no-useless-constructor": 0,
    "no-unused-expressions": 0,
    "no-param-reassign": 0,
    "no-empty-function": 0,
    "no-console": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": 0,
    "no-underscore-dangle": 0,
    "arrow-body-style": 0,
    "consistent-return": 0,
    "one-var": 0,
    "one-var-declaration-per-line": 0,
    "prefer-promise-reject-errors": 0,
    eqeqeq: 0,
    camelcase: 0,
    "object-shorthand": 0,
  },
}
