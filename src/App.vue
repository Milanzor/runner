<template>
    <v-app>

        <!-- Top toolbar -->
        <v-toolbar
                :clipped-left="$vuetify.breakpoint.lgAndUp"
                color="blue"
                dark
                app
                flat
        >
            <v-toolbar-title>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <span class="hidden-sm-and-down">Runner</span>
            </v-toolbar-title>
        </v-toolbar>

        <!-- Nav drawer -->
        <Sidebar :drawer="drawer" @runnerSelected="activateRunner"/>

        <!-- Runner -->
        <Runner/>

        <!-- Loader -->
        <Loader :show="loading"/>
    </v-app>
</template>

<script>
    import Loader from "./components/Loader";
    import Sidebar from "./components/Sidebar";
    import Runner from "./components/Runner";

    export default {
        components: {Runner, Sidebar, Loader},
        data: () => ({
            drawer: true,
            loading: true,
        }),
        mounted() {
            setTimeout(() => this.loading = false, 500);
        },
        methods: {
            activateRunner(runner) {
                console.log(runner);
            }
        }
    };
</script>
