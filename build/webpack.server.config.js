const path = require('path')
const webpack = require('webpack')
const base = require('./webpack.base.config')
const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

class ServerConfig extends BaseConfig {
    constructor() {
        super();
        this.entry = path.resolve(__dirname, '../src/server-entry.js');
        this.target = 'node';
        this.devtool = 'source-map';
        this.output = {
            path: path.resolve(__dirname, '../dist'),
            filename: 'server/[name].js',
            libraryTarget: 'commonjs2'
        }
        this.externals = nodeExternals({
            whitelist: /\.css$/
        });

        this.plugins = super.plugins || [];
        this.plugins.push(new ExtractTextPlugin('server/styles.css'));
    }
}

const serverConfig = new ServerConfig();
module.exports = serverConfig;