const path = require('path');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  mode: 'development',
  watch: true,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./app/assets", to: "./assets" },
        { from: "./app/src/mock", to: "./src/mock" },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html', // Template source file
      filename: 'index.html', // Output file name in dist
      minify: false, // Set to false here, we'll handle minification with HtmlMinimizerPlugin
    }),
  ],
  optimization: {
    minimize: true, // Enable optimization
    minimizer: [
      new HtmlMinimizerPlugin(), // Add HtmlMinimizerPlugin to minimize HTML
    ],
  },
};
