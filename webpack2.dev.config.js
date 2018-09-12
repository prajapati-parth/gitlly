var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: ['babel-polyfill', './src2/index.js'],
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'src2/electron'),
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'src2/electron'),
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
                test: /(\.scss|\.css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            { 
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    }
}
