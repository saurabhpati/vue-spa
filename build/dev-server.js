const webpack = require('webpack');
const ClientConfig = require('./webpack.client.config');
const ServerConfig = require('./webpack.server.config');
const MFS = require('memory-fs');
const path = require('path');

module.exports = function (app, onUpdate) {
    let clientConfig = new ClientConfig();
    clientConfig.entry.app = ['webpack-hot-middleware/client', clientConfig.entry.app];
    clientConfig.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin());
    let clientCompiler = webpack(clientConfig);
    app.use(require('webpack-dev-middleware')(clientCompiler, {
        stats: {
            colors: true
        }
    }));
    app.use(require('webpack-hot-middleware')(clientCompiler));

    let serverConfig = new ServerConfig();
    let serverCompiler = webpack(serverConfig);
    let mfs = new MFS();
    const outputPath = path.join(serverConfig.output.path, 'server/main.js');
    serverCompiler.outputFileSystem = mfs;
    serverCompiler.watch({}, () => {
        onUpdate(mfs.readFileSync(outputPath, 'utf-8'));
    })
}