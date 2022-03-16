const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './Assests/js/code.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'code.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'index.html',
            filename: './index.html',
            template: 'index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'form.html',
            filename: './form.html',
            template: 'form.html'
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    { loader: "style-loader", options: { injectType: "singletonStyleTag" } }
                    , 'css-loader'
                ],
            },
            {
                test: /\.(ttf|svg|png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            // {
            //     test: /\.html$/i,
            //     loader: "html-loader",
            // },

        ],
    }
}