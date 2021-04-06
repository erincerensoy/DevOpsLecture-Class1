const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

//IP, Port
const port = process.env.PORT || 80

// App
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/v1/api', routes)

//Server
app.listen(port, (err) => {
    if (err) {
        console.error('Error::', err);
    }
    console.log(`running server on from port:::::::${port}`);
});