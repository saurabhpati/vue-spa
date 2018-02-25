<template>
    <nav class="nav has-shadow">
        <div class="container">
            <router-link to="/category/front-end" exact>
                <img src="http://bit.ly/vue-img" alt="Vue SPA"/>
            </router-link>
            <router-link to="/category/front-end" class="nav-item is-tab" exact>Front End</router-link>
            <router-link to="/category/mobile" class="nav-item is-tab" exact>Mobile</router-link>
            <router-link to="/login" class="nav-item is-tab">Login</router-link>
        </div>
    </nav>
</template>
