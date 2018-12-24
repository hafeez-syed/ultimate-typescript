const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");

module.exports = {
  entry: {
    code: "./src/code/app.ts",
    layout: "./src/layout/app.js"
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname + "./dist/")
  },
  resolve: {
    extensions: ["*", ".ts", ".js"]
  },
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: ["awesome-typescript-loader"],
        exclude: /node_module/
      },
      {
        test: /\.css$/,
        loader: ["css-loader"],
        exclude: /node_module/
      },
      {
        test: /\.ts$/,
        enforce: "pre",
        use: [
          {
            loader: "tslint-loader",
            options: {
              configuration: {
                rules: {
                  quotemark: [true, "double"]
                }
              },
              configFile: "./tslint.json",
              emitErrors: false,
              failOnHint: false,
              typeCheck: false,
              fix: false,
              tsconfigFile: "./tsconfig.json",
              formattersDirectory: "node_modules/tslint-loader/formatters/",
              fileOutput: {
                dir: "./tslintOutput/",
                ext: "xml",
                clean: true,
                header:
                  '<?xml version="1.0" encoding="utf-8"?>\n<checkstyle version="5.7">',
                footer: "</checkstyle>"
              }
            }
          }
        ]
      }
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
      template: "./index.html"
    })
  ]
};
