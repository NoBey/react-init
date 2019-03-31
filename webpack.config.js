
const path = require('path');

module.exports = {
  entry: {
    index: './src/main.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.js(.*)$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      options: {
        presets: ['latest', 'stage-0', 'react']
      }
    }]
  },
  devServer: {
    compress: true,
    port: 9000,
  }
}
