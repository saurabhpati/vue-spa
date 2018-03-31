const base = require('./webpack.base.config');

const config = Object.assign({}, base,  {});
delete config.entry;

module.exports = config;