const path = require('path');

module.exports = {
    entry: './src/cms/index.js',
    output: {
        path: path.resolve(__dirname, 'static/admin/cms-config'),
        filename: 'index.js',
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};