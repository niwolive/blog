module.exports = {
  title: 'Code with flair',
  resolve: true,
  mergeConfig: {
    // following options will be merged
    module: {
      rules: [{
        test: /\.md$/,
        loader: 'vue-markdown-loader'
      }]
    }
  }
}
