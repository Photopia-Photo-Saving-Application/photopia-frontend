import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.cyan.lighten2,
                secondary: colors.lightBlue.darken4,
                accent: colors.cyan.lighten4,
                error: colors.red.accent3,
            },
        },
    },
});
