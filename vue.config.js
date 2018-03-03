const merge = require('deepmerge')

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options =>
        merge(options, {
          loaders: {
            i18n: '@kazupon/vue-i18n-loader'
          }
        })
      )
  },
  devServer: {
    historyApiFallback: true,
    stats: "minimal",
    proxy: {
      "/api/*": {
        target: "https://api.ktube.xyz",
        secure: false,
        changeOrigin: true
      }
    },
    host: "0.0.0.0",
    port: 8080
  }
}
