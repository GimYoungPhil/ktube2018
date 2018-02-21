module.exports = {
  lintOnSave: true,
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
