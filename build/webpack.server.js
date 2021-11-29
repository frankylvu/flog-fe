const { resolve } = require('path')
const nodeExternals = require('webpack-node-externals')
const BaseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')
const { PROJECT_PATH } = require('./scripts/constant.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  entry: {
    app: resolve(PROJECT_PATH, '../src/server/index.js'),
  },
  output: {
    filename: 'bundle.js',
    path: resolve(PROJECT_PATH, '../dist-server'),
  },
  plugins: [new CleanWebpackPlugin()],
  externals: [nodeExternals()],
}
module.exports = merge(BaseConfig, config)
