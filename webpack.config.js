const HtmlWebpackPlugin      = require('html-webpack-plugin');
const MiniCssExtractPlugin   = require('mini-css-extract-plugin');
const path = require('path');
module.exports = {
    mode: 'development',
    module: {
        rules:[         
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
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: true,
        })

    
    ],
}