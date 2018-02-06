const path = require('path')

const config = {
    entry: {
        app: path.resolve(__dirname, '../src/entry.js')
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'js/[name].js'
    }
}

module.exports = config;