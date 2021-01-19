const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)

  // Feel free to modify this webpack config however you'd like to
  console.log('singleSpaWebpackConfig >>>>>>>>>>>>>>>>')
  console.dir(singleSpaWebpackConfig)
  return {
    ...singleSpaWebpackConfig,
    externals: [...singleSpaWebpackConfig.externals, {
      '@my/redux-store': '_myReduxStore'
    }]
  }
}
