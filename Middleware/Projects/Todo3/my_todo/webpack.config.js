const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/todo_redux.jsx",
  output: {
    path: path.join(__dirname),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  devtool: 'source-map'
};
