const fs = require('fs');
const path = require('path');
const {spawn} = require('child_process');

// Linerstream, Split a readable stream by newline characters
const Linerstream = require('linerstream');

const Convert = require('ansi-to-html');
const ansiConverter = new Convert();

const kill = require('tree-kill');

module.exports = {

    /**
     *
     */
    runners: {},

    /**
     *
     */
    configFile: null,

    log: {},

    /**
     *
     * @param configFile
     */
    initialize(configFile) {


        // Fetch the runners config
        try {
            let absPathConfigFile = path.resolve(configFile);
            this.runners = require(absPathConfigFile);
            this.configFile = absPathConfigFile;
        } catch (e) {
            console.error('Failed fetching runner file, using empty file');
            this.configFile = path.resolve('./runners.json');
        }

        // Fetch package.json for all the runners
        if (Object.keys(this.runners).length) {

            //
            Object.keys(this.runners).forEach((runner_id) => {

                //
                if (this.runners.hasOwnProperty(runner_id)) {

                    // This runner
                    let runner = this.runners[runner_id];

                    // Fetch the package
                    runner.package = this._fetchPackage(runner.path);

                    // Does the package have scripts?
                    if ('scripts' in runner.package && Object.keys(runner.package.scripts).length) {

                        // Build the processes object to fill with the spawned process later
                        runner.processes = {};
                        Object.keys(runner.package.scripts).forEach((script_name) => {
                            if (runner.package.scripts.hasOwnProperty(script_name)) {
                                runner.processes[script_name] = false;
                            }
                        });
                    }
                }
            });
        }
    },

    /**
     *
     */
    getRunnerList() {

        let runnerList = {};

        this._iterateRunners((runner_id, runner) => {
            runnerList[runner_id] = {
                path: runner.path,
                scripts: {}
            };
            Object.keys(runner.processes).forEach((script) => {
                if (runner.processes.hasOwnProperty(script)) {
                    runnerList[runner_id];
                }
            });
        });

        return runnerList;
    },

    /**
     *
     * @param runner_id
     * @param script
     */
    spawn(runner_id, script) {

        let runner = this.runners[runner_id];

        // It seems this is already spawned
        if (runner.processes[script]) {
            return runner.processes[script];
        }

        // Spawn the builders process
        const runnerProcess = spawn('yarn', [script], {cwd: runner.path, shell: true});

        // Pipe the splitters
        runnerProcess.stdout = runnerProcess.stdout.pipe(new Linerstream());
        runnerProcess.stderr = runnerProcess.stderr.pipe(new Linerstream());

        this.log[runner_id] = [];

        // On stdout
        runnerProcess.stdout.on('data', (data) => {
            let logLine = ansiConverter.toHtml(data.trim());
            // No empty log line
            if (logLine) {
                this.log[runner_id].push(logLine);
            }
        });

        // On stderr
        runnerProcess.stderr.on('data', (data) => {
            let logLine = ansiConverter.toHtml(data.trim());
            // No empty log line
            if (logLine) {
                this.log[runner_id].push(logLine);
            }
        });

        // When the child process closes
        runnerProcess.on('close', (code) => {
            let logLine = `RUNNER: ${runner_id} closed with code ${code}`;
            this.log[runner_id].push(logLine);
        });

        // Put the process in the runner list
        this.runners[runner_id].processes[script] = runnerProcess;

        // Return the process
        return runnerProcess;
    },

    /**
     * Kills the running script of a runner
     *
     * @param runner_id
     * @param script
     */
    kill(runner_id, script) {
        if (this.runners[runner_id].processes[script]) {
            kill(this.runners[runner_id].processes.pid);
            this.runners[runner_id].processes[script] = null;
            this.log[runner_id] = [];
        }
    },

    /**
     *
     * @param rootPath
     * @returns {*}
     * @private
     */
    _fetchPackage(rootPath) {
        let absPackagePath = path.resolve(rootPath, 'package.json');
        if (fs.existsSync(absPackagePath)) {
            return require(absPackagePath);
        }
        return {};
    },

    _iterateRunners(cb) {

        // Check if we even have runners
        if (Object.keys(this.runners).length) {

            //
            Object.keys(this.runners).forEach((runner_id) => {

                //
                if (this.runners.hasOwnProperty(runner_id)) {

                    // This runner
                    cb(runner_id, this.runners[runner_id]);

                }
            });
        }
    }
};
