module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "58",
          safari: "11.1",
          firefox: "60",
          ie: "9",
        },
        useBuiltIns: "usage",
        corejs: 3,
        modules: false,
      },
    ],
  ],
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",{
            targets:{
              node:"current"
            }
          }
        ]
      ],
      plugins: ["transform-vue-jsx", "transform-es2015-modules-commonjs", "dynamic-import-node"],
    },
  },
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
}
