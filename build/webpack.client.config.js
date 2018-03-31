const BaseConfig = require('./webpack.base.config'),
      ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
      path = require('path');

class ClientConfig extends BaseConfig {
    constructor() {
        super();
        this.plugins = super.plugins || [];
        this.output.path = path.resolve(__dirname, '../dist');
        this.plugins.push(new ExtractTextWebpackPlugin('assets/css/styles.css'));
        this.module.rules.find(rule => rule.loader == 'vue-loader').options.extractCSS = true;
    }
}

module.exports = new ClientConfig();