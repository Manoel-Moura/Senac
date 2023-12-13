const path = require('path')
module.exports = {
    entry: ['@babel/polyfill', path.resolve(__dirname, './src/main.js')],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
        // sourceMapFilename: 'bundle.js.map' 
    },
    devServer: {
        static: {
          directory: path.resolve(__dirname, './public') 
        },
        port: 8080
    },
    devtool: 'source-map' 
}