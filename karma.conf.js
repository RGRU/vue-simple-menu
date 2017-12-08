const webpackConfig = require('./webpack.test.config')

module.exports = function(config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha', 'chai'],
    // singleRun: true,
    // autoWatch: false,
    reporters: ['mocha'],
    files: ['./test/index.js'],
    preprocessors: {
      './test/index.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  })
}
