import Vue from 'vue';
import store from './vuex/index.js';
import AppLayout from './themes/Layout.vue';
import router from './router';

var app = new Vue({
    router,
    store,
    ...AppLayout,
});

export { app, router, store };