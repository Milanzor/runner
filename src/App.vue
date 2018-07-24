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
        <Runner :runner="runner" v-if="runner.id"/>

        <!-- Placeholder for no runner -->
        <v-content v-else>
            <v-container fluid>
                <v-layout>
                    <v-flex xs12>
                        <v-card>
                            <v-card-text class="text-xs-center">
                                Select a Runner
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <!-- Loader -->
        <Loader :show="loading"/>
    </v-app>
</template>

<script>
    import Loader from './components/Loader';
    import Sidebar from './components/Sidebar';
    import Runner from './components/Runner';

    export default {
        components: {Runner, Sidebar, Loader},
        data() {
            return {
                runners: [
                    {
                        id: '@milanzor/runner',
                        path: '/srv/vhosts/dev/milan.hw/',
                        active: true,
                        log: [
                            'Lipsum '
                        ]
                    },
                    {
                        id: '@notquitezen/c3i',
                        path: '/srv/vhosts/dev/milan.hw/',
                        active: false,
                        log: [
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        ]
                    }
                ],
                runner: {},
                drawer: true,
                loading: true
            };
        },
        methods: {
            runnerSelected(runner) {
                this.runner = runner;
            }
        },
        mounted() {
            setTimeout(() => this.loading = false, 300);
        }
    };
</script>
