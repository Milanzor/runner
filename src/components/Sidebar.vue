<template>
    <v-navigation-drawer
            clipped
            fixed
            app
            v-model="drawer"
    >
        <v-list dense>
            <template v-for="(runner, runner_id) in runners">
                <v-list-tile
                        :key="runner_id"
                        ripple
                        @click="runnerSelected(runner, runner_id)"
                        :class="{accent: active_runner_id === runner_id, 'white--text': active_runner_id === runner_id}"
                >
                    <v-list-tile-action>
                        <v-icon >label</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{ runner_id }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider :key="`divider-${runner_id}`"></v-divider>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
    export default {
        name: 'Sidebar',
        data() {
            return {
                active_runner_id: null
            };
        },
        props: {
            drawer: Boolean,
            runners: Object
        },
        methods: {
            runnerSelected(runner, runner_id) {
                this.$emit('runnerSelected', runner, runner_id);
                this.active_runner_id = runner_id;
            }
        }
    };
</script>
