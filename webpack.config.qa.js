/*
    ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const crypto = require('crypto');
var APP_DIR = path.resolve(__dirname, './src');
var BUILD_DIR = path.resolve(__dirname, './dist/dev');

/*const ModuleScopePlugin = require('@k88/ModuleScopePlugin');
*/
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
}) 


module.exports= env => {
  console.log('started building in webpack development');
  console.log(env);
    return {
    entry: ['babel-polyfill','./src/index.js'],
    
    output: {
      path: path.resolve('dist'),
      filename: 'index_bundle.js',
      libraryTarget: 'umd' 
    },
    module: {
      rules: [
        { test: /\.css$/,
          use: [
            // The `injectType`  option can be avoided because it is default behaviour
            { loader: 'style-loader' },
            { loader: 'css-loader', options: {  esModule: false, } },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader"
        }, {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: "babel-loader"
        }, {
          test: /\.(ttf|eot|woff|woff2|map)$/,          
          use: "url-loader"
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                esModule: false,
              },
            },
          ]
        },
        {
          test:/\.html$/,
          use: [
            'html-loader'
          ]
        },
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('./public/index.html'),
      }),
      HtmlWebpackPluginConfig,
      new CopyWebpackPlugin({
        patterns: [
            { from: 'src/assets'},
            { from: 'public'}
        ]
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed) // it will automatically pick up key values from .env file
    }),
    new CleanWebpackPlugin()
    ]
  }
}