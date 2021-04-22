import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.cyan.lighten2,
                secondary: colors.cyan,
                accent: '#8c9eff',
                error: colors.red.accent3,
            },
        },
    },
});
