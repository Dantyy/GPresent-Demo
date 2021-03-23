module.exports = {
  devServer: {
    port: 8889 // 端口号，如果端口号被占用会自动加一
  },
  publicPath: './',
  lintOnSave: false, // 关闭格式检查
  productionSourceMap: false // 打包时不会生成.map文件，加快打包速度
}
