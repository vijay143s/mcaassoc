/*
    ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
var APP_DIR = path.resolve(__dirname, './src');
var BUILD_DIR = path.resolve(__dirname, './dist');
var dotenv = require('dotenv').config({ path: __dirname + '/.env' });

/*const ModuleScopePlugin = require('@k88/ModuleScopePlugin');
*/
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports = env => {

  console.log('started root in webpack building.......');
  var finalBuildFolder = '';
  var welComeJs = '';
  if (env.development) {
    finalBuildFolder = 'dev';
    welComeJs = "";
    console.log('Building for Development.....');
    dotenv = require('dotenv').config({ path: __dirname + '/.env.development' });
  } else if (env.qa) {
    welComeJs = '';
    finalBuildFolder = 'qa';
    console.log('Building for QA.......');
    dotenv = require('dotenv').config({ path: __dirname + '/.env.qa' });
  } else if (env.production) {
    finalBuildFolder = 'prod';
    console.log('Building for Production.............');
    dotenv = require('dotenv').config({ path: __dirname + '/.env.production' });
  } else if (env.demo) {
    finalBuildFolder = 'demo';
    console.log('Building for Demo.............');
    dotenv = require('dotenv').config({ path: __dirname + '/.env.demo' });
  } else {
    console.log('Building failed, please review all configurations');
    return false;
  }
  console.log(dotenv);

  return {

    mode: env.development ? 'development' : 'production',
    entry: ['babel-polyfill', './src/index.js'],

    output: {
      path: path.resolve('dist/' + finalBuildFolder),
      // filename: 'SutiVP/index_bundle.js',
      filename: welComeJs + 'index_bundle.js',
      //publicPath: contextPath
      //      libraryTarget: 'umd' 
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            // The `injectType`  option can be avoided because it is default behaviour
            { loader: 'style-loader' },
            { loader: 'css-loader', options: { esModule: false, } },
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
          test: /\.(gif|png|jpe?g|svg|csv|xls|xlsx|xlsm|xlsb|xltx|xltm|xlt|xml|xlam|xla|xlw|xlr)$/i,
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
          test: /\.html$/,
          use: [
            'html-loader'
          ]
        },
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      HtmlWebpackPluginConfig,
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/assets' },
          {
            from: 'public',
            globOptions: {
              ignore: ['**/index.html'],
            },
          }
        ]
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenv.parsed)
      }),
      new CleanWebpackPlugin()
    ]
  }

}
