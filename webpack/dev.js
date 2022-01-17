const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/index.ts',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },

    devServer: {
        historyApiFallback: true,
        port: 8080,
        open: true
    }
}