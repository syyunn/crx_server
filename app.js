const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/example', (req, ) => {
    console.log(`${req.body.hlgt}`);
});

const port = 8080;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});


