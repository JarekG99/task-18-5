var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var OptimizeJsPlugin = require('optimize-js-plugin');
var env =process.env.NODE_ENV || 'development';

const path = require('path');

const plugins = [new HtmlWebpackPlugin({
   template: 'index.html',
   filename: 'index.html',
   inject: 'body'
})];

module.exports = {
    entry: [
            'react-hot-loader/patch',
            './client/index.js'
          ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                 test: /\.css$/,
                 use: [
                     { loader: 'style-loader'},
                     {
                         loader: 'css-loader',
                         options: {
                             modules: true
                         }
                      }
                    ]
                  }
              ]
        },


     devServer: {
      proxy: {
          '/socket.io': {
              target: 'http://localhost:3000',
              ws: true
          }
      }
    }
}
