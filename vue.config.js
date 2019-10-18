const path = require('path')
const debug = process.env.NODE_ENV !== 'production'


module.exports = {
    // // 基本路径
    // publicPath: '/'+version,
    // // 输出文件目录
    // outputDir: version||'dist',
    // assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    // // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    // compiler: false,

    // 第三方插件配置
    pluginOptions: {
    // ...
    }
}
