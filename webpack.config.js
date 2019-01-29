const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

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
    filename: '[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
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
      },
      plugins: [
        new VueLoaderPlugin()
      ]
    }
  ),

  // Build for using in browser
  // as <script src="...">
  Object.assign(
    {},
    config,
    {
      optimization: {
        minimizer: [
          new UglifyJsPlugin({
            test: /\.min\.js$/
          })
        ]
      },
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
        new VueLoaderPlugin()
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
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader'
            ]
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
      optimization: {
        minimizer: [
          new OptimizeCSSAssetsPlugin({})
        ]
      },
      entry: {
        'vue-simple-menu.default.min': path.join(__dirname, 'src/styles/default.sass')
      },
      module: {
        rules: [
          {
            test: /\.sass$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader'
            ]
          }
        ]
      }
    }
  )

]
