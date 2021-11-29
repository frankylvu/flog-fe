const { resolve } = require('path')
const webpackBaseConfig = require('./webpack.base')
const WebpackMerge = require('webpack-merge')
const { PROJECT_PATH } = require('./scripts/constant.js')
const clientPlugins = require('./scripts/getHtmlPlugin')

module.exports = WebpackMerge.merge(webpackBaseConfig, {
  mode: 'production',
  ...clientPlugins,
  entry: {
    app: resolve(PROJECT_PATH, '../src/index.tsx'),
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: resolve(PROJECT_PATH, '../dist-client'),
  },
})
