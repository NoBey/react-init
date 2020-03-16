const path = require("path");
const darkThemeVars = require("antd/dist/dark-theme");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/main.js"
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.js"
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              }
            }
          },
          {
            loader: "less-loader",
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
};
