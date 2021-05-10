/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-04-22 14:52:57
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-10 16:57:14
 */
const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const getLessVariables = require("./utils")
const ESLintPlugin = require("eslint-webpack-plugin")
// css文件分离
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// 压缩插件
const TerserPlugin = require("terser-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const readEnv = require("./readEnv")
const resolve = (src) => {
  return path.resolve(__dirname, "../", src)
}
module.exports = (options) => {
  const EnvNotDev = options.env !== "dev"
  const externals = EnvNotDev
    ? {
        vue: "Vue",
        "vue-router": "VueRouter",
        vuex: "Vuex",
        axios: "axios",
        mockjs: "Mock",
      }
    : {}
  return {
    entry: {
      main: resolve("src/main.js"),
    }, //入口
    output: {
      path: resolve("dist"),
      filename: "static/js/[name].js",
      publicPath: EnvNotDev ? "./" : "/",
      clean: EnvNotDev, //打包时清除dist目录（如果是在本地开发，则不清除dist目录,提升打包性能）
      environment: {
        // 这里配置wp5打包出来的代码会存在es6特性，为了兼容IE9+，关闭以下特性
        arrowFunction: false, //是否需要打包箭头函数代码
        destructuring: false, //是否需要打包出解构代码
        bigIntLiteral: false, //是否需要环境支持BigInt作为litera
        const: false, //是否需要const和let
        forOf: false, //是否需要for of遍历
      },
    },
    // 排除
    externals,
    resolve: {
      // 别名
      alias: {
        "@": resolve("src"),
      },
      // 去除后缀
      extensions: [".js", ".json", ".vue", ".css", ".less"],
    },
    performance: {
      // 文件大小上限警告
      maxEntrypointSize: 1024 * 1024 * 2, //入口大小2M
      maxAssetSize: 1024 * 1024 * 1, //出口大小1M
    },
    module: {
      rules: [
        {
          test: /\.(css|less)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: "../../",
              },
            },
            "css-loader",
            "less-loader",
            {
              loader: "less-loader",
              // options: {
              //   lessOptions:{
              //     globalVars: getLessVariables(resolve("src/less/var.less")),
              //   }
              // },
            },
            {
              loader: "style-resources-loader",
              options: {
                patterns: resolve("src/less/var.less"),
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          loader: "svg-sprite-loader",
          include: [resolve("src/icons/svg")],
          options: {
            symbolId: "icon-[name]",
          },
        },
        {
          test: /\.(woff|svg|eot|ttf|png|jpg|gif)\??.*$/,
          loader: "url-loader",
          include: [resolve("src/assets"), /node_modules/],
          options: {
            limit: 10 * 1024,
            esModule: false,
            name: "static/images/[name][hash:8].[ext]",
          },
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      ],
    },
    optimization: {
      // 分包
      splitChunks: {
        chunks: "all", //在做代码分割时，只对异步代码生效，写成all的话，同步异步代码都会分割
        minSize: 30000, //引入的包大于30KB才做代码分割
        minChunks: 1, //当一个包至少被用了多少次的时候才进行代码分割
        cacheGroups: {
          element: {
            name: "element-ui",
            test: /[\\/]element-ui[\\/]/,
            priority: 5,
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/, //检测引入的库是否在node_modlues目录下的
            priority: -10, //值越大,优先级越高.模块先打包到优先级高的组里
            name: "vendors.js", //把所有的库都打包到一个叫vendors.js的文件里
          },
          default: {
            priority: -20,
            reuseExistingChunk: true, //如果一个模块已经被打包过了,那么再打包时就忽略这个上模块
            name: "module-common.js",
          },
        },
      },
      // js压缩
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false, //是否需要将依赖包的注释打包成.txt输出
          terserOptions: {
            compress: {
              drop_debugger: true,
              pure_funcs: ["console.log"], // 移除console
            },
          },
        }),
      ],
    },
    plugins: [
      // 复制public目录下除index.html的其他文件
      new CopyPlugin({
        patterns: [
          {
            from: "./public/*",
            to: "[name][ext]",
            globOptions: {
              ignore: ["**/index.html"],
            },
          },
        ],
      }),
      // html文件生成
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: resolve("public/index.html"),
        title: "Weize", //页面标题
      }),
      // 定义环境和变量
      new webpack.DefinePlugin({
        "process.env": JSON.stringify({
          NODE_ENV: options.mode,
          ...readEnv(`../.env.${options.env}`),
        }),
      }),
      // 分离出css文件
      new MiniCssExtractPlugin({
        filename: "static/css/[name].css",
      }),
      // vue插件
      new VueLoaderPlugin(),
      // eslint
      new ESLintPlugin({
        extensions: ["js", "vue", "json"],
        exclude: "/node_modules/",
      }),
    ],
  }
}
