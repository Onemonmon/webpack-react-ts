const defaultConfig = require("./webpack.base.config");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");

module.exports = merge(defaultConfig, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "开发环境",
      filename: path.resolve(__dirname, "./dist/index.html"),
      template: "index.html",
      inject: "body",
    }),
  ],
});
