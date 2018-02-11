const path = require('path');

module.exports = class BaseConfig {
    constructor() {
        this.entry = {
            app: path.resolve(__dirname, '../src/entry.js')
        };

        this.module = {
            rules: [
                // {
                //     enforce: "pre",
                //     test: /(\.js$)|/\.vue$//,
                //     loader: 'eslint-loader',
                //     exclude: /node_modules/
                // }
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        css: 'css-loader',
                        scss: 'css-loader|sass-loader'
                    }
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }
            ]
        }

        this.output = {
            path: path.resolve(__dirname, '../dist'),
            publicPath: '/',
            filename: 'js/[name].js'
        }
    }
};