module.exports = {
  publicPath: './',   /*使dist下的HTML可以显示内容*/
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options => Object.assign(options,{limit: 10000000}))  //解除打包图片大小限制，推荐直接通过网址实现在项目中图片的引用，不然打包时间会很长
  }
}


