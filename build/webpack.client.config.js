const BaseConfig = require('./webpack.base.config');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = class ClientConfig extends BaseConfig {
    constructor() {
        super();
        this.plugins = super.plugins || [];
        this.plugins.push(new ExtractTextWebpackPlugin('css/styles.css'));
        this.module.rules.find(rule => rule.loader == 'vue-loader').options.extractCSS = true;
    }
}