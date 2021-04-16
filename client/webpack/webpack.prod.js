const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
//const CleanWebpackPlugin = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');


module.exports = merge(common, {
  mode: 'production',
  stats: {
    colors: false,
    hash: true,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true,
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  plugins: [
    //new FriendlyErrorsWebpackPlugin(),
    //new CleanWebpackPlugin(),

    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
    new HtmlWebpackPlugin({
      title: 'Docker Practice Two',
      filename: "../index.html",
      // Load a custom template (lodash by default)
      template: './src/index-prod.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ]



});