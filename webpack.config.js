var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/dist'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })            
            },
            {
                test: /\.(jpg|png)$/,
                use:[                   // for file loader i need set of rules that's why i have an object
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',         //This path is to store the file in the dist folder
                            publicPath: 'img/'          //This path is apply the image in the html file
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'           //Convert the html file to string
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "style.css"
        }),
        new HtmlWebpackPlugin({                 // uses the template to create the new file by using the template
            template: 'src/index.html',
        })

    ]    
}