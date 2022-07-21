const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    // development mode tells it to stop minifying
    mode: "development",
    entry: "./client/index.js",
    output: {
        filename: "bundle.js",
        publicPath: '/',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      static: {
          publicPath: '/',
          directory: path.join(__dirname, 'build'),
      },
      proxy: {
        '*': 'http://localhost:3000'
      },
      compress: true,
      port: 8080,
    },
    module: {
    rules: [
        {
            test: /\.jsx?/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/preset-react']
            },
        },
        {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        },
        {
        test: /\.(png|jpe?g|svg|gif)?$/,
        use: 'url-loader',
        },
        {
          test: /\.mp3$/,
          loader: 'file-loader'
      }
    ],
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: path.resolve(__dirname, './index.html'),
          filename: 'index.html',
        }),
      ],
}
  
  