const express = require('express');
const app = express();
const server = require('http').Server(app);

app.get('/', (req, res) => {
    res.status(200).write("Hello World");
})





server.listen(3030);
