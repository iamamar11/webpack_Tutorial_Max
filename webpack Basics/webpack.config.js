var path = require('path');
const webpack = require('webpack');

// webpack need 4 core concepts [entry, Module Loaders, plugins, output]
module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // path of the dir
        filename: 'bundle.js',      // path of the filename name after comliling
        publicPath: '/dist'         // public path to tell webpack where to look otherwise it will give an error. (which notify that webpack fails to read the file path)
    },
    // ModuleLoader - Allows to tranform our files (eg. css file)
    module:{
        rules:[
            {
                test: /\.css$/,         // check for the file extension and then only apply the loader 
                use: [                  // USE for multiple loader and LOADER for single loader
                    'style-loader',     // the loader should be in reverse because webpack load loaders in reverse order
                    'css-loader'
                ]
            }
        ]
    },
    // Plugins are same as loaders. The only difference is that they are applied on the output core( means applied on the bundles) before outputs APPLIED ON WHOLE CODE
    // Plugin example is like minifying or formatting the code
    // plugins : [
    //     new UglifyJsPlugin()
            
    // ]
};