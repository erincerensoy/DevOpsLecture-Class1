const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

//IP, Port
const port = process.env.PORT || 8080

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use('/v1/api', routes)

//Server
server.listen(port, (err) => {
    if (err) {
        console.error('Error::', err);
    }
    console.log(`running server on from port::::${port}`);
});