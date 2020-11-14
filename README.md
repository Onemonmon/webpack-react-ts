## babel 7.x 与 8.x 版本问题

1. 安装 babel-core babel-preset-env... 时,babel-loader 的版本需要是 7.x (npm i babel-loader@7 -D)
2. 若想安装 8.x 版本，需要安装配套插件@babel/core @babel/preset-env @babel/preset-react
3. 注意.babelrc 文件里的 presets 也要改成@babel/preset-xxx

## @babel/plugin-transform-runtime 与 @babel/polyfill

1. babel 只负责转换 syntax（let const ...），需要使用以上两个插件转换 api（async includes ...）

### @babel/polyfill

1. npm i @babel/polyfill --save (需要先运行)
2. .babelrc 中与 @babel/preset-env 结合使用，添加{"useBuiltIns": "usage|entry"} entry 会在入口完整地引入一次 polyfill，usage 按需引入，如 require("core-js/modules/es.promise.finally")
3. @babel/polyfill 污染全局环境，如需要填充 includes 方法，它会直接修改全局变量，在 Array.prototype 上添加 includes 方法，这样可能会与其他也修改了全局变量的库冲突
4. 在需要helper的地方都会定义一个helper，导致定义了大量重复的helper
5. 但是当遇到需要 polyfill 一些实例化对象的方法如 Array.prototype.includes 时，还是需要要到@babel/polyfill

### @babel/plugin-transform-runtime

1. npm i @babel/plugin-transform-runtime --save--dev
   npm i @babel/runtime-corejs3 --save
2. @babel/runtime-corejs3实现了代码的转译，而@babel/plugin-transform-runtime则是为了更方便地使用runtime