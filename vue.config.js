module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-element/" : "./",
  devServer: {
    proxy: {
      '/api': {
        target: 'http://web.juhe.cn:8080/',
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          '^/api': '',
        },
      },
      // 代理的配置
    },
  },
};
