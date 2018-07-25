<template>
    <v-layout>
        <v-flex xs12>
            <v-card>
                <v-card-title primary-title>
                    <h3 class="headline mb-0">{{runner_id}}</h3>
                </v-card-title>
                <v-tabs show-arrows hide-slider>
                    <v-tabs-slider></v-tabs-slider>
                    <v-tab v-for="(active, script) in runner.scripts" :key="script" class="mx-3">
                        {{script}}
                    </v-tab>
                </v-tabs>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        name: 'RunnerDetails',
        props: {
            runner: Object,
            runner_id: String
        },
        mounted() {
        }
    };
</script>
