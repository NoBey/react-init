
const path = require('path');

module.exports = {
  entry: {
    index: './src/main',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    rules: [ { test: /\.tsx?$/, loader: "ts-loader" }]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    compress: true,
    port: 9000,
  }
}
