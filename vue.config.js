// vue.config.js
module.exports = {
  chainWebpack: chainableConfig => {
     // modify config with webpack-chain
     // https://github.com/mozilla-neutrino/webpack-chain
  },

  configureWebpack: config => {
    // mutate config directly, or return new config
  },

  // object literal will be merged into base config using webpack-merge
  configureWebpack: {
    devServer: {
      historyApiFallback: true,
      stats: 'minimal',
      proxy: {
        '/api/*': {
          target: 'https://ktube.bookstour.com',
          secure: false,
          changeOrigin: true
        }
      },
      host: '0.0.0.0',
      port: 8080
    }
  }
}

console.log('hi')
