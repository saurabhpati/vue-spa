import Vue from 'vue';

Vue.component('app', {
    template: `
    <div id="app">
        <nav class="nav has-shadow">
            <div class="container">
                <a href="/">
                    <img src="http://bit.ly/vue-img" alt="Vue SPA"/>
                </a>
            </div>
        </nav>
        <section class="main-section section"></sectopm>
        <footer class="footer">
            <div class="container">
                <div class="content has-text-centered">
                    Follow us on 
                    <a href="https://twitter.com/saurabhjpati" target="_blank">Twitter</a>
                </div>
            </div>
        </footer>
    </div>
    `
});

var app = new Vue({
    template: '<app></app>'
});

export { app };