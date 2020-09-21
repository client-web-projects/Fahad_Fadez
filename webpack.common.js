const path = require("path");

module.exports = {
  entry: {
    index: "./src/assets/scripts/index.js",
    // about: "./src/assets/scripts/about.js",
    // services: "./src/assets/scripts/services.js",
    // gallery: "./src/assets/scripts/gallery.js",
    // contact: "./src/assets/scripts/contact.js",
    vendor: "./src/assets/scripts/vendor.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpeg|jpg|JPG|gif|json|mp4)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images",
          },
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
};
