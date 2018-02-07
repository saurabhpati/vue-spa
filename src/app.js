import Vue from 'vue';

var app = new Vue({
    data: {
        hello: "hi there"
    },
    template: '<div id="app">{{hello}}</div>'
});

export { app };