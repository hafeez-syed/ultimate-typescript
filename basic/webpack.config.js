const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require("path");
const {
  CheckerPlugin
} = require('awesome-typescript-loader');

module.exports = {
  entry: './src/layout/app.js',
  output: {
    filename: "js-bundle.js",
    path: __dirname + "./dist"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [{
        test: /\.ts$/,
        loader: "awesome-typescript-loader",
        exclude: /node_module/
      },
      {
        test: /\.css$/,
        loader: "css-loader",
        exclude: /node_module/
      },
    ]
  },
  devServer: {
    port: 4000
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebPackPlugin({
      inject: true,
      template: './index.1.html',
    })
  ]
};