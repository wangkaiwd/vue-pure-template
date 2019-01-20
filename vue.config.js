const path = require('path')
const resolve = dir => path.resolve(__dirname, `src/${dir}/`)
module.exports = {
  // 关闭eslint
  lintOnSave: false,
  chainWebpack: config => {
    // 配置别名
    config.resolve
      .alias
      .set('@', resolve(''))
      .set('api', resolve('api'))
      .set('styles', resolve('styles'))
      .set('utils', resolve('utils'))
      .set('http', resolve('http'))
      .set('views', resolve('views'))
      .set('components', resolve('components'))
      .set('assets', resolve('assets'))
      .set('filters', resolve('filters'))
      .set('mixins', resolve('mixins'))
      .set('store', resolve('store'))
      .end()
      .extensions
      .add('.scss')
    // 配置省略扩展名
    config.resolve.extensions

  },
  css: {
    loaderOptions: {
      // 自动引入scss
      sass: {
        data: `
          @import "@/styles/mixins.scss";
          @import "@/styles/vars.scss";
        `
      }
    }
  }
}