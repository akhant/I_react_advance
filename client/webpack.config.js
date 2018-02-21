
require("react-hot-loader/patch")
const path = require('path') 
const webpack = require('webpack')  
const HtmlWebpackPlugin = require('html-webpack-plugin') 
const outputPath = path.resolve(__dirname, './dist')

module.exports = {
    entry: {
        app: [
            "react-hot-loader/patch",
            path.resolve(__dirname, './src/index.js')
        ]
    },
    output: {
        path: outputPath,
        filename: '[name].js'
    },

module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            enforce: 'pre',
            use: 'eslint-loader'
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /\.s(a|c)ss$/,
            exclude: /node_modules/,
            use: [
                'style-loader', 
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                'style-loader', 
                'css-loader'
            ]
        },
        {
            test: /\.(gif|png|jpg|jpeg|svg)$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, './src/assets/'),
            use: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]'
        }
        ]
    },    
    resolve: {
        alias: {
            'components': path.resolve(__dirname, './src/components'),
            'containers': path.resolve(__dirname, './src/containers'),
            'reducer': path.resolve(__dirname, './src/reducer'),
            'AC': path.resolve(__dirname, './src/AC'),
            'util': path.resolve(__dirname, './src/util'),
            'store': path.resolve(__dirname, './src/store'),
            'middlewares': path.resolve(__dirname, './src/middlewares'),
            'constants': path.resolve(__dirname, './src/constants.js'),
        }
    },  
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/assets/index.html'),
            filename: 'index.html',
            path: outputPath
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 8080,
        historyApiFallback: true,
        inline: true,
        hot: true,
        host: '0.0.0.0'
    }
}