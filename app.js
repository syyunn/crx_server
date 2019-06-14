const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const python = require('python-shell');
const python_path = '/Users/zachary/anaconda3/bin/python';

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/client_txt', (req, ) => {

    const text = `${req.body.hlgt}`;

    console.log(text);

    /* python runs in express js */
    const options = {
        mode: 'text',
        pythonPath: python_path,
        pythonOptions: ['-u'],
        scriptPath: 'test.py',
        args: ['--text', text]
    };
    //TODO: Get return val from python script not print val
    python.PythonShell.run('.', options,
        function (err, results) {
        if (err)
            throw err;
        console.log(results[0]); // python "print" val stored in results
    });

    /******************************/

});

const port = 8080;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
