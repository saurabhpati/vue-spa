const path = require('path');

class BaseConfig {
    constructor() {
        this.entry = {
            app: path.resolve(__dirname, '../src/client-entry.js')
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
                        scss: 'css-loader|sass-loader',
                        extractCSS: null
                    }
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                }
            ]
        }

        this.output = {
            path: path.resolve(__dirname, '../dist'),
            publicPath: '/',
            filename: 'assets/js/[name].js'
        }
    }
};

module.exports = new BaseConfig();