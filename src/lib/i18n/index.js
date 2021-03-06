import Vue from 'vue';
import VueI18n from 'vue-i18n';
import es from './es';
import en from './en';

Vue.use(VueI18n);

export default new VueI18n({
    locale: 'es',
    fallbackLocale: 'en',
    messages: {
        es,
        en,
    },
});
