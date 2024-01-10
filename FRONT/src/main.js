import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueI18n from 'vue-i18n';
// import frJson from '@/assets/locales/fr.json';
// import enJson from '@/assets/locales/en.json';

// Vue.use(VueI18n);

// const messages = {
//   fr: frJson,
//   en: enJson,
// };

// const i18n = new VueI18n({
//   locale: 'en',
//   fallbackLocale: 'fr',
//   messages,
// });

new Vue({
  // i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')