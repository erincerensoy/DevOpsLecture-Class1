const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

//IP, Port
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/v1/api', routes)

//Server
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);