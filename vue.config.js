const path = require('path')
const resolve = dir => path.resolve(__dirname, `src/${dir}/`)
module.exports = {
  // 关闭eslint
  lintOnSave: false,
  chainWebpack: config => {
    // 这里的具体配置都可以在文档的链接中找到
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
      // 扩展名省略
      .extensions
      .add('.scss')

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
