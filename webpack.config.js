const path = require('path');
const root = path.join(__dirname,'public');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: root,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
            options: {
              presets: ['react']
            }
        }]
    }
}