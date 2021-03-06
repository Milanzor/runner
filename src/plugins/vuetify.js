import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';
import VueSocketio from 'vue-socket.io';

Vue.use(Vuetify, {
    theme: {
        primary: colors.deepPurple.accent4,
        secondary: colors.red.base,
        accent: colors.pink.base,
        error: colors.red.base,
        warning: colors.yellow.accent2,
        info: colors.cyan.accent3,
        success: colors.green.base
    }
});

Vue.use(VueSocketio, `${window.location.protocol}//${window.location.hostname}:4999`);
