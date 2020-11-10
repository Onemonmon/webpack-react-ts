const defaultConfig = require("./webpack.base.config");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");

module.exports = merge(defaultConfig, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      title: "生产环境",
      filename: path.resolve(__dirname, "./dist/index.html"),
      template: "index.html",
      inject: true,
      hash: true,
      minify: {
        removeComments: true, //去除注释
        removeEmptyAttributes: true, //去除空属性
      },
    }),
  ],
});
