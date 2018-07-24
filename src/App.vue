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

        <!-- Loader -->
        <Loader :show="loading"/>
    </v-app>
</template>

<script>
    import Loader from './components/Loader';
    import Sidebar from './components/Sidebar';
    import Runner from './components/Runner';
    import NoRunnerPlaceholder from './components/NoRunnerPlaceholder';

    export default {
        components: {NoRunnerPlaceholder, Runner, Sidebar, Loader},
        data() {
            return {
                runners: {},
                runner: {},
                runner_id: false,
                drawer: true,
                loading: true
            };
        },
        methods: {
            runnerSelected(runner, runner_id) {
                this.runner = runner;
                this.runner_id = runner_id;
            }
        },
        mounted() {
            setTimeout(() => this.loading = false, 300);
        },
        sockets: {
            'runner-list'(runners) {
                this.runners = runners;
            }
        }
    };
</script>
