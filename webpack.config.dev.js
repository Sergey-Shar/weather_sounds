const ESLintPlugin = require('eslint-webpack-plugin')
const { merge } = require('webpack-merge')
const configCommon = require('./webpack.config.common')

module.exports = merge(configCommon, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    hot: true,
    open: true
  },
  plugins: [new ESLintPlugin({ fix: true })]
})
