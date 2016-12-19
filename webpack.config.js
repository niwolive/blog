const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

module.exports = {
  entry: [ './src/app/app.js' ],
  // TODO - I may need `resolve: true` - find about it
  output: {
    path: './dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [ 'es2015', 'stage-3' ]
        }
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader'
      },
      { 
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/static',
      to: '.'
    }]),
    new PrerenderSpaPlugin(
      path.join(__dirname, 'dist'),
      [ '/' ]
    )
  ]
};
