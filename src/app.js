import Vue from 'vue';
import AppLayout from './themes/Layout.vue';
import router from './router';

var app = new Vue({
    router,
    ...AppLayout
});

export { app };