const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/todo_redux.jsx",
  output: {
    path: '/home/garrett/Documents/TestBed/AppAcaReact/Middleware/Projects/Todo3/my_todo/app/assets/javascripts',
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
