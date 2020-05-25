module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/style/mixins.scss";' // 全局变量
      }
    }
  },
  transpileDependencies: ['@bable/polyfill'],
  // 开发环境配置
  devServer: {
    open: false,
    host: 'localhost',
    port: 8080,
    https: false,
    // 以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {
      // 配置跨域
      '/api/v1': {
        target: 'http://localhost:9901/api/v1',
        ws: true,
        changOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api/v1': '' // 请求的时候使用这个api就可以
        }
      },
      '/api/v2': {
        target: 'http://localhost:9901/api/v2',
        ws: true,
        changOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api/v2': '' // 请求的时候使用这个api就可以
        }
      }
    }
  },
  // productionGzip: true,
  productionSourceMap: false // 生产环境是否生成 sourceMap 文件
}
