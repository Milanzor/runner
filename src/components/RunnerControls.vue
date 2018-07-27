<template>
    <v-layout>
        <v-btn :color="activeState ? 'success' : 'error'" @click="toggleRunnerScript">Toggle</v-btn>
    </v-layout>
</template>
<script>
    export default {
        name: 'RunnerControls',
        props: {
            runner_id: String,
            script: String,
            active: true
        },
        data(){
            return {
                activeState: this.active,
            }
        },
        methods: {
            toggleRunnerScript() {
                this.activeState = !this.activeState;
                this.$socket.emit('toggle-runner-script', {runner_id: this.runner_id, script: this.script, active: this.active});
            }
        }
    };
</script>
