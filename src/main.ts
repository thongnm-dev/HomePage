import Vue from 'vue';
import App from './App.vue';
import {router} from './router';
import {store} from './store';
import '@/assets/sass/style.scss';
import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route } from 'vue-router';


Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === 'development';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to: Route, from: Route, next) => {
    if (["/company"].indexOf(to.path) > -1) {
        store.commit('fetchView', false);
    }
    if (["/recruit"].indexOf(to.path) > -1) {
        store.commit('fetchView', true);
    }
    store.commit('fetchBreadcrumb', true);
    next();
});
