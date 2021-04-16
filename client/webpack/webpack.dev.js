const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
//const CleanWebpackPlugin = require('clean-webpack-plugin')
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',

  plugins: [
  //  new FriendlyErrorsWebpackPlugin(),
       //new CleanWebpackPlugin(),
       // new LodashModuleReplacementPlugin({
       //   'collections': true,
       //   'shorthands': true
       // }),
       new webpack.ContextReplacementPlugin(/moment[/\\]locale$/,/en/),
       new HtmlWebpackPlugin({
           title: 'Docker Practice Two',
           filename: "../index.html",
           // Load a custom template (lodash by default)
           template: './src/index-dev.html'
         }),
   new webpack.DefinePlugin({
     'process.env.NODE_ENV': JSON.stringify('development')
   }),
 ]

});