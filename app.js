const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const python = require('python-shell');

// define conda specific python
const python_path = '/Users/zachary/anaconda3/envs/abisee/bin/python';

// define sysArgs for python script
const mode = "decode";
const data_path = "/Users/zachary/Downloads/finished_files/chunked/test_000.bin";
const vocab_path = "/Users/zachary/Downloads/finished_files/vocab";
const log_root = "/Users/zachary/Downloads";
const exp_name = "pretrained_model_tf1.2.1";


app.use(bodyParser.urlencoded({ extended: true }));

app.post('/client_txt', (req, ) => {

    const text = `${req.body.hlgt}`;

    console.log(text);

    /* python runs in express js */
    const options = {
        mode: 'text',
        pythonPath: python_path,
        pythonOptions: ['-u'],
        scriptPath: '/Users/zachary/project/pointer-generator/',

        args: [ '--hlgt', text,
                '--mode', mode,
                '--data_path', data_path,
                '--vocab_path', vocab_path,
                '--log_root', log_root,
                '--exp_name', exp_name,
                '--max_enc_steps', 400,
                '--max_dec_steps', 120,
                '--coverage', 1,
                '--single_pass', 1,
                '--batch_size', 1,
                '--beam_size', 1]

    };
    //TODO: Get return val from python script not print val
    python.PythonShell.run('run_summarization.py',
        options,
        function (err, results) {
        if (err)
            throw err;
        console.log("\n summary: " + results[results.length-1] + "\n"); // python "print" val stored in results
    });

    /******************************/

});

const port = 8080;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
