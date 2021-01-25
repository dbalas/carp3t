import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';

import './plugins/bootstrap-vue';
import App from './App.vue';
import './registerServiceWorker';
import i18n from './lib/i18n';

Vue.config.productionTip = false;

new Vue({
    i18n,
    render: (h) => h(App),
}).$mount('#app');
