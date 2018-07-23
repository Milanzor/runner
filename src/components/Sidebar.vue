<template>
    <v-navigation-drawer
            clipped
            fixed
            app
            v-model="drawer"
    >
        <v-list dense>
            <template v-for="item in items">
                <v-list-tile :key="item.id" ripple @click="openRunner(item.id)">
                    <v-list-tile-action>
                        <v-icon :color="item.color">{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{ item.id }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider :key="`divider-${item.id}`"></v-divider>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                items: [
                    {icon: "label", id: "@milanzor/runner", color: "green"},
                    {icon: "label", id: "@notquitezen/c3i", color: "red"},
                ]
            }
        },
        props: {
            drawer: {},
        },
        methods: {
            openRunner(id) {
                this.$emit('runnerSelected', id);
            }
        }
    }
</script>
