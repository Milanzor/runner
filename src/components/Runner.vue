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
                        <RunnerDetails :runner="runner" :runner_id="runner_id"/>
                        <RunnerControls :runner="runner" :runner_id="runner_id"/>
                        <RunnerLog :log="activeLog" v-if="activeLog.length"/>
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
                activeLog: []
            };
        },
        methods: {}
    };
</script>
