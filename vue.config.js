module.exports = {
  lintOnSave: true,
  devServer: {
    historyApiFallback: true,
    stats: "minimal",
    proxy: {
      "/api/*": {
        target: "https://ktube.bookstour.com",
        secure: false,
        changeOrigin: true
      }
    },
    host: "0.0.0.0",
    port: 8080
  }
}
