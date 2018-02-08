const BaseConfig = require('./webpack.base.config');

module.exports = class ClientConfig extends BaseConfig {
    constructor() {
        super();
        this.plugins = super.plugins || [];
    }
}