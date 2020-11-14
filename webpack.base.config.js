const path = require("path");

module.exports = {
  // 构建环境
  mode: "development",
  // 入口文件
  entry: "./src/index.js",
  // 出口文件
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  // 模块
  module: {
    rules: [
      {
        test: /\.tsx$|\.ts$|\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.tsx$|\.ts$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.jpg$|\.jepg$|\.png$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options: {},
        },
      },
    ],
  },
};
