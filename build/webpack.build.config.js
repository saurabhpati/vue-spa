const path = require('path')

const config = {
    entry: {
        app: path.resolve(__dirname, '../src/entry.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'js/[name].js'
    }
}

module.exports = config;