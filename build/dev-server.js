const webpack = require('webpack');
const clientConfig = require('./webpack.client.config');

module.exports = function (app) {
    var config = new clientConfig();
    config.entry.app = ['webpack-hot-middleware/client', config.entry.app];
    config.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin());
    var clientCompiler = webpack(config);
    app.use(require('webpack-dev-middleware')(clientCompiler, {
        stats: {
            colors: true
        }
    }));
    app.use(require('webpack-hot-middleware')(clientCompiler));
}