<template>
    <b-navbar class="header" toggleable="md" type="dark" variant="dark">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand to="/">Heartbeat</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item to="login">Login</b-nav-item>
                <b-nav-item to="profile">Profile</b-nav-item>
                <b-nav-item to="tracker">Tracker</b-nav-item>
                <b-nav-item to="dashboard">Dashboard</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>
                <b-nav-item-dropdown right>
                    <!-- Using button-content slot -->
                    <template slot="button-content">
                        <em>User</em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Signout</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item to="settings">Settings</b-nav-item>
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

    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }

</style>
