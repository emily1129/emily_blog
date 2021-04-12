module.exports = {
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        args[0]['process.env'].VERSION = JSON.stringify(require('./package.json').version)
        return args
      })
  },
  configureWebpack: config => {
    config.devtool = process.env.NODE_ENV === 'production' ? false : 'inline-source-map'
  }
}
