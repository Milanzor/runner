<template>
    <v-card dark class="black monospace">
        <v-card-text class="log-container">
            <pre class="log"><template v-for="(message, key) in log"><p v-bind:key="key">{{message}}</p></template></pre>
        </v-card-text>
    </v-card>
</template>
<script>
    export default {
        name: 'RunnerLog',
        props: {
            runner: {}
        }
    };
</script>
<style lang="scss">
    .monospace {
        font-family: monospace;
    }

    .log-container {

    }
</style>
