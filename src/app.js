const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

//IP, Port
const port = process.env.PORT || 80

const exp = express();
exp.use(bodyParser.urlencoded({ extended: false }));
exp.use(bodyParser.json());
exp.use('/v1/api', routes)

//Server
exp.listen(port, (err) => {
    if (err) {
        console.error('Error::', err);
    }
    console.log(`running server on from port:::::::::${port}`);
});