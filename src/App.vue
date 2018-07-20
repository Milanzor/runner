<template>
    <v-app>

        <!-- Top toolbar -->
        <v-toolbar
                :clipped-left="$vuetify.breakpoint.lgAndUp"
                color="blue darken-3"
                dark
                app
                fixed
                flat
        >
            <v-toolbar-title>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <span class="hidden-sm-and-down">Runner</span>
            </v-toolbar-title>
        </v-toolbar>

        <!-- Nav drawer -->
        <v-navigation-drawer
                :clipped="$vuetify.breakpoint.lgAndUp"
                v-model="drawer"
                fixed
                app
        >
            <v-list dense>
                <template v-for="item in items">
                    <v-list-tile :key="item.text" @click="">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>

        <!-- Content -->
        <v-content>
            <v-container fluid>
                asd
            </v-container>
        </v-content>

        <!-- Loader -->
        <v-layout row justify-center>
            <v-dialog v-model="loading" persistent fullscreen content-class="loading-dialog" transition="v-fade-transition">
                <v-container fill-height>
                    <v-layout row justify-center align-center>
                        <v-progress-circular indeterminate :size="100" :width="10" color="purple"></v-progress-circular>
                    </v-layout>
                </v-container>
            </v-dialog>
        </v-layout>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawer: true,
            loading: false,
            items: [
                {icon: 'label', text: 'Contacts'},
                {icon: 'label', text: 'Frequently contacted'},
                {icon: 'label', text: 'Duplicates'},
                {icon: 'label', text: 'Settings'},
                {icon: 'label', text: 'Send feedback'},
                {icon: 'label', text: 'Help'},
                {icon: 'label', text: 'App downloads'},
                {icon: 'label', text: 'Go to the old version'}
            ]
        })
    };
</script>

<style>
    .loading-dialog {
        background-color: white;
    }
</style>
