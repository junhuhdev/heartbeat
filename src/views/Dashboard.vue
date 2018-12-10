<template>
    <div>
        <h1>Dashboard</h1>
        <line-chart></line-chart>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import LineChart from '@/components/dashboard/LineChart.vue';

    @Component({
        components: {
            'line-chart': LineChart,
        },
    })

    export default class Dashboard extends Vue {


    }
</script>

<style scoped>

</style>
