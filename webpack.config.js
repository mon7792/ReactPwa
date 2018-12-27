const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const srcDir = path.resolve(__dirname, 'src')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  mode: 'development',
  entry : `${srcDir}/index.js`,
  output: {
    filename : 'bundle.js',
  },
  module : {
    rules : [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'standard-loader',
      exclude: /node_modules/
    },{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
          {
          loader: "css-loader",
          options: {
            modules: true,
            localIdentName: '[name]-[local]-[hash:base64:6]',
            camelCase: true
          }}
        ]
        }),
      // use: [
      //     { loader: 'style-loader' },
      //     {
      //       // loader: 'css-loader?modules,localIdentName=[hash:base64:6]-[name]-[local]',
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         localIdentName: '[name]-[local]-[hash:base64:6]',
      //         camelCase: true
      //       }}
      //   ],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`
    }),
    new ExtractTextPlugin("styles.css")
  ]
}
