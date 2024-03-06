module.exports = {
    publicPath: 'build',
    chainWebpack: config => {
        config.performance
          .maxEntrypointSize(400000)
          .maxAssetSize(400000)
    },
    performance: {
        hints: false
      },
    optimization: {
        splitChunks: {
          minSize: 10000,
          maxSize: 250000,
        }
    }
}
