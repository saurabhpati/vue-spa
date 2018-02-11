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
                //     test: /(\.js$)/,
                //     loader: 'eslint-loader',
                //     exclude: /node_modules/
                // }
            ]
        }

        this.resolve = {
            alias: {
                vue: 'vue/dist/vue.js'
            }
        };

        this.output = {
            path: path.resolve(__dirname, '../dist'),
            publicPath: '/',
            filename: 'js/[name].js'
        }
    }
};