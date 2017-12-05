const webpack = require('webpack')
const UglifyJsPlugin = require('uglify-js-plugin')
const path = require('path')

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
  )

]
