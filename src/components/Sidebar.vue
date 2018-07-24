<template>
    <v-navigation-drawer
            clipped
            fixed
            app
            v-model="drawer"
    >
        <v-list dense>
            <template v-for="runner in runners">
                <v-list-tile
                        :key="runner.id"
                        ripple
                        @click="runnerSelected(runner)"
                        :class="{accent: activeRunnerId === runner.id, 'white--text': activeRunnerId === runner.id}"
                >
                    <v-list-tile-action>
                        <v-icon :color="runner.active ? `green` : `red`">label</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{ runner.id }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider :key="`divider-${runner.id}`"></v-divider>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
    export default {
        name: 'Sidebar',
        data() {
            return {
                activeRunnerId: null
            };
        },
        props: {
            drawer: Boolean,
            runners: Array
        },
        methods: {
            runnerSelected(runner) {
                this.$emit('runnerSelected', runner);
                this.activeRunnerId = runner.id;
            }
        }
    };
</script>
