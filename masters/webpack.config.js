var path = require("path");

module.exports = {
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: __dirname + "./dist"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        //use: "awesome-typescript-loader"
        loader: "ts-loader",
        exclude: /node_module/
      }
    ]
    /*loaders: [
      {
        test: /\.ts$/,
        loaders: ["awesome-typescript-loader"],
        include: path.join(__dirname, "src")
      }
    ]*/
  },
  devServer: {
    port: 4000
  }
};
