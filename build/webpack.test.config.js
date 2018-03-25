const BaseConfig = require('./webpack.base.config');

module.exports = class TestConfig extends BaseConfig {
    constructor() {
        super();
        delete this.entry;
    }
}