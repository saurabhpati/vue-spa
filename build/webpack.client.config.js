const base = require('./webpack.base.config');

module.exports = class client extends base {
    constructor() {
        super();
        this.plugins = base.plugins || [];
    }
}