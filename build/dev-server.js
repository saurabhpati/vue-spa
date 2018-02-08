const webpack = require('webpack');
const ClientConfig = require('./webpack.client.config');

module.exports = function (app) {
    let config = new ClientConfig();
    config.entry.app = ['webpack-hot-middleware/client', config.entry.app];
    config.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin());
    let clientCompiler = webpack(config);
    app.use(require('webpack-dev-middleware')(clientCompiler, {
        stats: {
            colors: true
        }
    }));
    app.use(require('webpack-hot-middleware')(clientCompiler));
}