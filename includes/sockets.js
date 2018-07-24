// Get command line options
const argv = require('minimist')(process.argv.slice(2));

// Config file through command line option or default to ./runners.json
const configFile = 'config' in argv ? argv.config : './runners.json';

// Start socket.io
const io = require('socket.io')();

// Get runners interface
const runner = require('./runners');

// Init the runners
runner.initialize(configFile);

// Socket connection
io.on('connection', function(socket) {

    socket.emit('runner-list', runner.getRunnerList());

});

module.exports = io;
