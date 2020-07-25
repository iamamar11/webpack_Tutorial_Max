var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: "main.css"
})
module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, 'dist'), // path of the dir
        filename: 'bundle.js',      // path of the filename name after comliling
        publicPath: '/dist'
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
                use: extractPlugin.extract({
                    use: ['css-loader','sass-loader']
                })
            }
        ]
    },
    // to use the plugin we need the refrence here in plugin section even though we have used the plugin in loader section
    plugins: [
        extractPlugin
        // new ExtractTextPlugin("main.css")
    ]
}