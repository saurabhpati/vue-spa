const TestConfig = require('../../build/webpack.test.config'),
    testConfig = new TestConfig();

module.exports = config => {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'sinon-chai'],
        files: ['./index.js'],
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
