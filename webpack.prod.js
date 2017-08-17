const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let webpackConfig = {

  context: path.resolve(__dirname, 'src/'),

  entry: {
    home: './home/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  devServer: {
    contentBase: path.join(__dirname, 'src//'),
    port: 8080
  },

  devtool: false,

  plugins: [

    new ExtractTextPlugin('styles.css'),

    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      Handlebars: 'handlebars/runtime'
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })

  ]

};


/*
 * CSS bundles
 */

webpackConfig = merge(webpackConfig, {
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader'
      })
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.html$/,
      loader: 'html-loader'
    },
    {
      test: /\.hbs$/,
      use: [{
        loader: 'handlebars-loader',
        options: {
          rootRelative: path.join(__dirname, '_templates/'),
          knownHelpers: [
            'eq'
          ],
          knownHelpersOnly: false
        }
      }]
    }
    ]
  }
});


module.exports = webpackConfig;
