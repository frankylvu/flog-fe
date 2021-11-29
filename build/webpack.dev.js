const { resolve } = require('path')
const webpackBaseConfig = require('./webpack.base')
const WebpackMerge = require('webpack-merge')
const { SERVER_HOST, SERVER_PORT, PROJECT_PATH } = require('./scripts/constant.js')
const clientPlugins = require('./scripts/getHtmlPlugin')

module.exports = WebpackMerge.merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  ...clientPlugins,
  devServer: {
    host: SERVER_HOST, // 指定 host，不设置的话默认是 localhost
    port: SERVER_PORT, // 指定端口，默认是8080
    // stats: 'errors-only', // 终端仅打印 error
    // clientLogLevel: 'silent', // 日志等级
    compress: true, // 是否启用 gzip 压缩
    open: true, // 打开默认浏览器
    hot: true, // 热更新
  },
  entry: {
    app: resolve(PROJECT_PATH, '../src/index.tsx'),
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: resolve(PROJECT_PATH, '../dist-client'),
  },
})
