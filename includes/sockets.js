// Get command line options
const argv = require('minimist')(process.argv.slice(2));

// Config file through command line option or default to ./runners.json
const configFile = 'config' in argv ? argv.config : './runners.json';

// Start socket.io
const io = require('socket.io')();

// Get runners interface
const Runner = require('./runners');

// Initialize the Runner interface
const runner = new Runner(configFile);

// Broadcasts all log lines to all connected clients
runner.on('log-line', (logOptions) => {
    io.sockets.emit('log-line', logOptions);
});

// Socket connection
io.on('connection', function(socket) {

    socket.on('runner-list', () => {
        socket.emit('runner-list', runner.getRunnerList());
    });

    socket.on('toggle-runner-script', (runnerScript) => {
        runner.spawn(runnerScript.runner_id, runnerScript.script);
    });
});

module.exports = io;
