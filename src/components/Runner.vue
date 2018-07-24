<template>
    <div class="grey lighten-3">
        <!-- Content -->
        <v-content>
            <v-container fluid>
                <v-layout>
                    <v-flex xs12>
                        <v-layout>
                            <v-flex xs12 sm6>
                                <v-card-actions>
                                    <div class="text-xs-center">
                                        <v-chip>{{runner.id}}</v-chip>
                                    </div>
                                    <div class="text-xs-center">
                                        <v-chip>{{runner.path}}</v-chip>
                                    </div>
                                </v-card-actions>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-card-actions class="justify-end">
                                    <v-icon
                                            slot="activator"
                                            :color="runner.active ? `green` : `red`"
                                            @click="runnerToggle"
                                    >
                                        power_settings_new
                                    </v-icon>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                        <v-card dark class="black monospace">
                            <v-card-text class="log-container">
                                <pre class="log"><template v-for="(message, key) in runner.log"><p v-bind:key="key">{{message}}</p></template></pre>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>
<script>
    export default {
        name: 'Runner',
        props: {
            runner: Object
        },
        data() {
            return {};
        },
        methods: {
            runnerToggle() {
                this.runner.active = !this.runner.active;
                this.$emit('runnerToggle', [this.runner, this.runner.active]);
            }
        }
    };
</script>
<style lang="scss">
    .monospace {
        font-family: monospace;
    }

    .log-container {

        .log {
            white-space: normal;
            p {
                font-size: 12px;
                margin: -2px 0;
            }
        }
    }
</style>
