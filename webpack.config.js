const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let extractStyles = new ExtractTextPlugin('[name].css');
let extractHtml = new ExtractTextPlugin('[name].html');

let config = {
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: true,
    timings: true,
    chunks: false,
    chunkModules: false
  },
  entry: {
    index: [
      path.resolve(__dirname, 'assets/templates/index.pug')
    ],
    'css/application': [
      path.resolve(__dirname, 'assets/styles/application.scss')
    ],
    'js/application': [
      path.resolve(__dirname, 'assets/js/application.js')
    ],


  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.pug$/,
        loader: extractHtml.extract({
          use: ['html-loader', 'pug-html-loader?pretty&exports=false']
        })
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img/',
          publicPath: '/'
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
          publicPath: '/'
        },

      },
      {
        test: /\.scss$/,
        loader: extractStyles.extract({
          loader: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: (loader) => [
                  require('autoprefixer')(),
                  require('cssnano')()
                ]
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      }
    ]
  },
  devtool: 'source-map',



  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMapFilename: 'sourcemap.[ext].map',
      sourceMap: true,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      options: {
        postcss: [
          autoprefixer({
            browsers: ['last 2 version', 'Explorer >= 10', 'Android >= 4']
          })
        ],
        sassLoader: {
          includePaths: [
            path.resolve(__dirname, 'node_modules/sanitize.css/')
          ]
        }
      }
    }),
    extractStyles,
    extractHtml
  ],


};
module.exports = config;
