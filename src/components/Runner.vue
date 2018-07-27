<template>
    <div class="grey lighten-3">
        <!-- Content -->
        <v-content>
            <v-container fluid>
                <v-layout>
                    <v-flex xs12>
                        <v-card-actions>
                            <code>{{runner_id}}</code>&nbsp;<code>{{runner.path}}</code>
                        </v-card-actions>
                        <RunnerDetails :runner="runner" :runner_id="runner_id" @scriptSelected="scriptSelected"/>
                        <RunnerControls :runner="runner" :runner_id="runner_id" :script="script"/>
                        <RunnerLog :log="log" v-if="log.length"/>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>
<script>
    import RunnerLog from './RunnerLog';
    import RunnerDetails from './RunnerDetails';
    import RunnerControls from './RunnerControls';

    export default {
        name: 'Runner',
        components: {RunnerControls, RunnerDetails, RunnerLog},
        props: {
            runner: Object,
            runner_id: String
        },
        data() {
            return {
                script: null,
                log: []
            };
        },
        methods: {
            scriptSelected(script) {
                this.script = script;
                this.log = this.runner.scripts[script].log;
            }
        }
    };
</script>
