const path = require("path"),
  common = require("./webpack.common"),
  merge = require("webpack-merge"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
  TerserPlugin = require("terser-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin");


      
module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
      // splitChunks: {
      //   chunks: 'all'
      // },
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin()
    ]
  },
  module: {
    rules: [
         {
              test: /\.scss$/,
              use: [
                 MiniCssExtractPlugin.loader, 
                 "css-loader", 
                 "sass-loader"
              ]
          },
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: "./src/index.html",
          chunks: ['index']
      }),
      new HtmlWebpackPlugin({
          filename: 'about.html',
          template: "./src/about.html",
          chunks: ['about']
      }),
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
      // }),
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].css"
    }),
    new CleanWebpackPlugin()
  ]
});
