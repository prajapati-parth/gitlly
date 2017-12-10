var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'src/electron/bundle'),
        filename: 'bundle.min.js',
        libraryTarget: 'umd'
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
    },

     plugins: [
        new webpack.DefinePlugin({
            "process.env": { 
                NODE_ENV: JSON.stringify("production") 
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        })
    ]
}
