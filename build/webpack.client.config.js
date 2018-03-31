const base = require('./webpack.base.config'),
    ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
    path = require('path'),
    webpack = require('webpack');

const config = Object.assign({}, base, {
    plugins: (base.plugins || []).concat(new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'assets/js/[name].js'
    }))
});
config.output.path = path.resolve(__dirname, '../dist');
config.plugins.push(new ExtractTextWebpackPlugin('assets/css/styles.css'));
config.module.rules.find(rule => rule.loader == 'vue-loader').options.extractCSS = true;

if (process.env.NODE_ENV == 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
}

module.exports = config;