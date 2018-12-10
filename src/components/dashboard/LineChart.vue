<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {Line} from 'vue-chartjs';

    export default {
        extends: Line,
        props: ['chartdata', 'options'],
        mounted() {
            this.renderChart(this.chartdata, this.options);
        }
    };
</script>

<style scoped>

</style>
