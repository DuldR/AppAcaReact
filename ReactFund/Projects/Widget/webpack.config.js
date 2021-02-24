var path = require('path');

module.exports = {
  entry: "./src/widget.jsx",
  output: {
      path: path.resolve(__dirname, 'frontend'),
      filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  }
};