const path = require('path');

module.exports = {
    entry: './src/cms/index.js',
    output: {
        path: path.resolve(__dirname, 'static/cms-config'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, 'src')],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            'transform-decorators-legacy',
                            'add-module-exports',
                            'transform-class-properties',
                            'transform-object-rest-spread',
                        ],
                        presets: ['react', 'stage-1', 'stage-2', 'es2015'],
                    },
                },
            },
        ]
    }
};