const testConfig = require('../../build/webpack.test.config');

module.exports = config => {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'sinon-chai'],
        files: ['../../node_modules/babel-polyfill/dist/polyfill.js', './index.js'],
        preprocessors: {
            './index.js': ['webpack']
        },
        plugins: [
            'karma-mocha',
            'karma-sinon-chai',
            'karma-phantomjs-launcher',
            'karma-webpack'
        ],
        webpack: testConfig,
        webpackMiddleware: {
            noInfo: true
        }
    })
}
