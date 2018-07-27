<template>
    <v-card dark class="black monospace">
        <v-card-text class="log-container">
            <pre id="log"><template v-for="(message, key) in log"><p v-bind:key="key">{{message}}</p></template></pre>
        </v-card-text>
    </v-card>
</template>
<script>
    export default {
        name: 'RunnerLog',
        props: {
            log: Array
        },
        watch: {
            log() {
                let preLog = document.getElementById('log');
                setTimeout(() => {
                    preLog.scrollTop = preLog.scrollHeight + 50;
                });
            }
        }
    };
</script>
<style lang="scss">
    .monospace {
        font-family: monospace;
    }

    .log-container {
        pre {
            height: 600px;
            overflow-y: scroll;
            p {
                margin: 0;
            }
        }
    }
</style>
