import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router'
import {Front} from './front-router';
import {Systems} from './system-router';

Vue.use(VueRouter);

const routers: Array<RouteConfig> = [
    ...Front,
    ...Systems
];

export const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routers,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
              selector: to.hash
            }
          }
    }
});

router.beforeEach((to, from, next)=>{
    debugger
    if (to.path.includes('admin')) {
        if (to.name == 'login'|| to.name == 'register') {
            if (!document.cookie) {
                next();
            } else {
                next({ path: '/home' });
            }
        } else {
            if (!document.cookie) {
                next({ name: 'login', query: {returnUrl: to.path}});
            } else {
                next();
            }
        }
    } else {
        next();
    }
});

router.afterEach((to) => {
    window.scrollTo(0, 0);
});
