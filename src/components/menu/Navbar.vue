<template>
    <b-navbar class="header" toggleable="md" type="dark" variant="dark">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand to="/"><span class="logo" style="font-size: 1em; color: Tomato;"><i class="fas fa-heartbeat"></i></span> Heartbeat</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item to="registration">Registration</b-nav-item>
                <b-nav-item to="login">Login</b-nav-item>
                <b-nav-item to="daily">Daily</b-nav-item>
                <b-nav-item to="dashboard">Dashboard</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                    <template slot="button-content">
                        <em>Integration</em>
                    </template>
                    <b-dropdown-item to="profile">Oura</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown right>
                    <template slot="button-content">
                        <em>User</em>
                    </template>
                    <b-dropdown-item to="profile">Profile</b-dropdown-item>
                    <b-dropdown-item to="settings">Settings</b-dropdown-item>
                    <b-dropdown-item href="#">Logout</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item to="about">Report</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Navbar extends Vue {

    }
</script>

<style scoped>

    .logo {
        margin-right: 5px;
    }

    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }

</style>
