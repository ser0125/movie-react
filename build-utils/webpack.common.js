
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html"
});

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
          test: /\.tsx?$/,
          loader: "ts-loader"
        }
    ]
  },
  plugins: [htmlPlugin]
};