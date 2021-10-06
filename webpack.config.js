const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode:'production',
  entry: path.resolve(__dirname,'src/js/index.js'),
  output: {
    path: __dirname,
    publicPath: __dirname,
    filename: 'script.js'
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'styles.css'
  })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
}