const express = require('express'),
    app = express(),
    path = require('path');

const port = process.env.PORT || 3000;
const staticFileMiddleware = express.static(path.resolve(__dirname, './dist'));
app.listen(port, () => {
    console.log(`server is listeniing on port ${port}`);
});
app.use('/dist', staticFileMiddleware);
app.get('/', (request, response) => {
    return response.sendFile(path.resolve(__dirname, './src/index.html'));
});
require('./build/dev-server')(app);