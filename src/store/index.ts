import Vue from 'vue';
import Vuex from 'vuex';
import Global from './modules/root.module';
import Session from './modules/session.module';
import Auth from './modules/user.module';

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        Global,
        Session,
        Auth
    }
})
