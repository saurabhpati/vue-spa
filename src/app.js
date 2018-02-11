import Vue from 'vue';
import AppLayout from './themes/Layout.vue';

var app = new Vue({
    render: h => h(AppLayout)
});

export { app };