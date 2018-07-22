<template>
    <div class="grey lighten-3">
        <!-- Content -->
        <v-content>
            <v-container fluid>
                <v-layout>
                    <v-flex xs12>
                        <v-card dark class="black monospace">
                            <v-card-text class="log-container">
                                <pre class="log"><template v-for="(message, key) in messages"><p v-bind:key="key">{{message}}</p></template></pre>
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
        data() {
            return {
                messages: [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis dolorum est expedita facilis fugiat harum hic libero quibusdam saepe. Aspernatur earum esse in libero molestias nihil quasi soluta voluptas.',
                ],
            }
        }
    }
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
