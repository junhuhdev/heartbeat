<template>
    <div id="app">
        <Navbar></Navbar>
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Navbar from '@/components/menu/Navbar.vue';

    @Component({
        components: {
            Navbar,
        },
    })

    export default class App extends Vue {

    }
</script>

<!-- global CSS rules -->
<style>
    body {
        margin: 0;
        padding-top: 200px;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
