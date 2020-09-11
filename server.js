const express = require('express');
const app = express();
const server = require('http').Server(app);

app.get('/', (req, res) => {
    res.render('room');
})

app.set['view engine']




server.listen(3030);
