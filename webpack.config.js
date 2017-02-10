var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      include: /src/,
      loader: 'babel-loader',
      query: {
        presets: ["es2015","react"]
      }
    }]
  },
  devtool: "eval-source-map"
}
