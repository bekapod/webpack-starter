const webpack = require("webpack");
const NpmInstallPlugin = require("npm-install-webpack-plugin");

module.exports = ({ include }) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        use: ["babel-loader", "eslint-loader"]
      }
    ]
  },

  plugins: [
    new NpmInstallPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
});
