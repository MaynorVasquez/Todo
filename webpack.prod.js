const HtmlWebpackPlugin      = require('html-webpack-plugin');
const MiniCssExtractPlugin   = require('mini-css-extract-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
    mode: 'production',
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },   
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    // Disables attributes processing
                    sources: false,
                    minimize: false
                  },
              },
              {
                test: /\.css$/i,
                exclude: /style\.css$/i,
                use: ["style-loader", "css-loader"],
              },
              {
                test: /style\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader",
                ],
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                  esModule: false,
                  name: 'assets/[name].[ext]'
                },
              },
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.[contenthash].js'
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: true,
        }),
        new MinifyPlugin(),
        new CleanWebpackPlugin()
    
    ],
}