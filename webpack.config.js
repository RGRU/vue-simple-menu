const webpack = require('webpack')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
// const UglifyJsPlugin = require('uglify-fs-plugin')
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
      },
      plugins: [
        new WebpackCleanupPlugin()
      ]
    }
  )

]
