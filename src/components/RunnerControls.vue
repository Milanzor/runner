<template>
    <v-layout>
        <v-btn :color="active ? 'success' : 'error'" @click="toggleRunnerScript">Toggle</v-btn>
    </v-layout>
</template>
<script>
    export default {
        name: 'RunnerControls',
        props: {
            runner_id: String,
            script: String,
            active: Boolean
        },
        methods: {
            toggleRunnerScript() {
                this.active = !this.active;
                this.$socket.emit('toggle-runner-script', {runner_id: this.runner_id, script: this.script, active: this.active});
            }
        }
    };
</script>
