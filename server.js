const express = require('express'),
    app = express(),
    path = require('path'),
    fs = require('fs'),
    { createBundleRenderer } = require('vue-server-renderer');

const port = process.env.PORT || 3000;
const staticFileMiddleware = express.static(path.resolve(__dirname, './dist'));
const indexHtml = fs.readFileSync(path.resolve(__dirname, './src/index.html'), 'utf-8');
let renderer;
const isProd = process.env.NODE_ENV && process.env.NODE_ENV === 'production';
app.listen(port, () => {
    console.log(`server is listeniing on port ${port}`);
});
if (isProd) {
    app.use('/', staticFileMiddleware);
} else {
    app.use('/dist', staticFileMiddleware);
}
app.get('/', (request, response) => {
    renderer.renderToString({url: request.url}, (err, html) => {
        if (err) {
            return response.status(500).send('Server error');
        }

        console.log(html);
        html = indexHtml.replace('{{ APP }}', html);
        response.write(html);
        response.end();
    });
});

if (isProd) {
    let bundlePath = path.resolve(__dirname, './dist/server/main.js');
    renderer = createBundleRenderer(fs.readFileSync(bundlePath, 'utf-8'));
} else {
    require('./build/dev-server')(app, bundle => {
        renderer = createBundleRenderer(bundle);
    });
}