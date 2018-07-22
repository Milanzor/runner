<template>
    <v-layout row justify-center>
        <v-dialog v-model="show" persistent fullscreen content-class="loading-dialog" transition="v-fade-transition">
            <v-container fill-height>
                <v-layout row justify-center align-center>
                    <v-progress-circular indeterminate :size="50" :width="5" color="purple"></v-progress-circular>
                </v-layout>
            </v-container>
        </v-dialog>
    </v-layout>
</template>
<script>
    export default {
        name: 'Loader',
        props: {
            show: {}
        }
    }
</script>
<style>
    .loading-dialog {
        background-color: white;
    }
</style>
