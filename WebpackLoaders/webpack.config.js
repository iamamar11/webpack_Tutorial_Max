var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var {CleanWebpackPlugin} = require('clean-webpack-plugin');

// var extractPlugin = new ExtractTextPlugin({
//     filename: "main.css"
// })
module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, 'dist'), // path of the dir
        filename: 'bundle.js',      // path of the filename name after comliling
        // publicPath: '/dist'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                // exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {   // defining the rules for the plugin 
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader','sass-loader']
                })
            },
            {
                test:/\.html$/,
                loader: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            }
        ]
    },
    // to use the plugin we need the refrence here in plugin section even though we have used the plugin in loader section
    plugins: [
        new ExtractTextPlugin({
            filename: "main.css"
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        })
    ]
}