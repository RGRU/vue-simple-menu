// const webpack = require('webpack')
const UglifyJsPlugin = require('uglify-js-plugin')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  module: {
    rules: [
      {
        test: /\.(js|vue)&/,
        enforce: 'pre',
        use: ['eslint-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
}

const config4Styles = {
  output: {
    path: path.join(__dirname, 'dist/styles'),
    filename: '[name].css'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ]
}

module.exports = [

  // Build as UMD module
  Object.assign(
    {},
    config,
    {
      entry: path.join(__dirname, 'src/scripts/lib/VueSimpleMenu.vue'),
      output: {
        path: path.join(__dirname, 'dist'),
        filename: 'vue-simple-menu.js',
        libraryTarget: 'umd',
        library: 'VueSimpleMenu',
        umdNamedDefine: true
      }
    }
  ),

  // Build for using in browser
  // as <script src="...">
  Object.assign(
    {},
    config,
    {
      entry: {
        'vue-simple-menu': path.join(__dirname, 'src/scripts/plugin.js'),
        'vue-simple-menu.min': path.join(__dirname, 'src/scripts/plugin.js')
      },
      output: {
        path: path.join(__dirname, 'dist/global'),
        filename: '[name].js',
        libraryTarget: 'window',
        libraryExport: 'default',
        library: 'VueSimpleMenu'
      },
      plugins: [
        new UglifyJsPlugin({
          test: /\.min\.js$/
        })
      ]
    }
  ),

  // Build style
  Object.assign(
    {},
    config4Styles,
    {
      entry: {
        'vue-simple-menu.default': path.join(__dirname, 'src/styles/default.sass')
      },
      module: {
        rules: [
          {
            test: /\.sass$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                'css-loader',
                'sass-loader'
              ]
            })
          }
        ]
      }
    }
  ),

  // Build minified style
  Object.assign(
    {},
    config4Styles,
    {
      entry: {
        'vue-simple-menu.default.min': path.join(__dirname, 'src/styles/default.sass')
      },
      module: {
        rules: [
          {
            test: /\.sass$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    minimize: true
                  }
                },
                'sass-loader'
              ]
            })
          }
        ]
      }
    }
  )

]
