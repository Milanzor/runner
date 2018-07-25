<template>
    <v-app>

        <!-- Top toolbar -->
        <v-toolbar
                :clipped-left="$vuetify.breakpoint.lgAndUp"
                color="primary"
                dark
                app
                flat
        >
            <v-toolbar-title>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <span>Runner</span>
            </v-toolbar-title>
        </v-toolbar>

        <!-- Nav drawer -->
        <Sidebar :drawer="drawer" :runners="runners" @runnerSelected="runnerSelected"/>

        <!-- Runner -->
        <Runner :runner="runner" :runner_id="runner_id" v-if="runner_id"/>

        <!-- Placeholder for no runner -->
        <NoRunnerPlaceholder v-else></NoRunnerPlaceholder>

    </v-app>
</template>

<script>

    // Components
    import Sidebar from './components/Sidebar';
    import Runner from './components/Runner';
    import NoRunnerPlaceholder from './components/NoRunnerPlaceholder';

    // Vendors
    import 'material-design-icons-iconfont-only/iconfont/material-icons.css';
    import 'roboto-fontface/css/roboto/roboto-fontface.css';

    export default {
        components: {
            NoRunnerPlaceholder,
            Runner,
            Sidebar
        },
        data() {
            return {
                runners: {},
                runner: {},
                runner_id: false,
                drawer: true
            };
        },
        methods: {
            runnerSelected(runner, runner_id) {
                this.runner = runner;
                this.runner_id = runner_id;
            }
        },
        sockets: {
            'runner-list'(runners) {
                this.runners = runners;
                this.loading = false;
            },
            'log-line'(logOptions) {
                this.runners[logOptions.runner_id][logOptions.script].log.push(logOptions.logLine);
            }
        },
        mounted() {
            this.$socket.emit('runner-list');
        }
    };
</script>
