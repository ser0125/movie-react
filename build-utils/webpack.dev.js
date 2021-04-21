const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = () => merge(common, {
  mode: "development",
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.animation.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: {
                localIdentName: '[name]_[local]__[hash:base64:5]'
              }
            },
          }
        ]
      },
      {
        test: /\.animation.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      }
    ]
  }
});