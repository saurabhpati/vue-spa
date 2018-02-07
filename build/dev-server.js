const webpack = require('webpack');
const clientConfig = require('./webpack.build.config');

module.exports = function (app) {
    var clientCompiler = webpack(clientConfig);
    app.use(require('webpack-dev-middleware')(clientCompiler, {
        stats: {
            colors: true
        }
    }));
    app.use(require('webpack-hot-middleware')(clientCompiler));
}