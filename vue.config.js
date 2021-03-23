module.exports = {
  devServer: {
    port: 8889, // 端口号，如果端口号被占用会自动加一
    host: 'localhost', // 主机名，
    https: false, // 协议
    open: false // 启动服务时是否自动打开浏览器访问
  },
  publicPath: './',
  lintOnSave: false, // 关闭格式检查
  productionSourceMap: false // 打包时不会生成.map文件，加快打包速度
}
