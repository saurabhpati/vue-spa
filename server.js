const express = require('express'),
    app = express(),
    path = require('path'),
    { createBundleRenderer } = require('vue-server-renderer');

const port = process.env.PORT || 3000;
const staticFileMiddleware = express.static(path.resolve(__dirname, './dist'));
let renderer;
app.listen(port, () => {
    console.log(`server is listeniing on port ${port}`);
});
app.use('/dist', staticFileMiddleware);
app.get('/', (request, response) => {
    renderer.renderToString({url: request.url}, (err, html) => {
        if (err) {
            return response.status(500).send('Server error');
        }

        console.log(html);
        return response.sendFile(path.resolve(__dirname, './src/index.html'));
    });
});
require('./build/dev-server')(app, bundle => {
    renderer = createBundleRenderer(bundle);
});