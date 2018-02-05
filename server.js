const express = require('express'),
    app = express(),
    path = require('path')

const port = process.env.PORT || 3000;
app.listen(port, () => {
    return `server is listeniing on port ${port}`;
});
app.use(express.static('dist'));
app.get('/', (request, response) => { 
    return response.sendFile(path.resolve(__dirname, './src/index.html'));
});