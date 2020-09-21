const path = require("path"),
      common = require("./webpack.common"),
      merge = require("webpack-merge"),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");

      
module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
         {
              test: /\.scss$/,
              use: [
                  "style-loader",
                  "css-loader",
                 "sass-loader"
              ]
          }
    ]
  },
      plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./src/index.html",
            chunks: ['index']
        })
          // new HtmlWebpackPlugin({
          //     filename: 'about.html',
          //     template: "./src/about.html",
          //     chunks: ['about']
          // }),
          // new HtmlWebpackPlugin({
          //     filename: 'services.html',
          //     template: "./src/services.html",
          //     chunks: ['services']
          // }),
          // new HtmlWebpackPlugin({
          //     filename: 'gallery.html',
          //     template: "./src/gallery.html",
          //     chunks: ['gallery']
          // }),
          // new HtmlWebpackPlugin({
          //     filename: 'contact.html',
          //     template: "./src/contact.html",
          //     chunks: ['contact']
          // })
      ]  
});
