const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')
const configCommon = require('./webpack.config.common')

module.exports = merge(configCommon, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
  },
  experiments: {
    lazyCompilation: true
  }
})
