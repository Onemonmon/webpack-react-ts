## babel 7.x 与 8.x 版本问题

1. 安装 babel-core babel-preset-env... 时,babel-loader 的版本需要是 7.x (npm i babel-loader@7 -D)
2. 若想安装 8.x 版本，需要安装配套插件@babel/core @babel/preset-env @babel/preset-react
3. 注意.babelrc 文件里的 presets 也要改成@babel/preset-xxx

## @babel/plugin-transform-runtime 与 @babel/polyfill 的区别
