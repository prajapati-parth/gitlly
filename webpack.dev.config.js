var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'src/electron'),
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'src/electron'),
        compress: true,
        port: 9000,
        host: 'localhost',
    },

    externals: [nodeExternals()],

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /(\.less|\.css)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            { 
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    }
}
