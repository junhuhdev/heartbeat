<template>
    <b-container>
        <b-form-row>
            <b-col md="6" offset-md="3">
                <b-form>
                    <b-form-group horizontal label-text-align="left" label="Date">
                        <datepicker v-model="date" name="uniquename"></datepicker>
                    </b-form-group>

                    <b-form-group horizontal label-text-align="left" label="Mood">
                        <b-form-input id="mood"
                                      type="range"
                                      v-model="mood"
                                      required>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group horizontal label-text-align="left" label="Motivation">
                        <b-form-input id="motivation"
                                      type="range"
                                      v-model="motivation"
                                      required>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group horizontal label-text-align="left" label="Energy">
                        <b-form-input id="energy"
                                      type="range"
                                      v-model="energy"
                                      required>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group horizontal label-text-align="left" label="Medication">
                        <v-select :options="medication"></v-select>
                    </b-form-group>

                    <b-form-group horizontal label-text-align="left" label="Supplementation">
                        <v-select :options="supplementation"></v-select>
                    </b-form-group>

                    <b-form-group horizontal label-text-align="left" label="Notes">
                        <b-form-textarea id="textarea1"
                                         v-model="notes"
                                         placeholder="Enter something"
                                         :rows="6"
                                         :max-rows="6">
                        </b-form-textarea>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Create</b-button>
                </b-form>
            </b-col>
        </b-form-row>
    </b-container>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Datepicker from 'vuejs-datepicker';

    @Component({
        components: {
            Datepicker,
        }
    })

    export default class Daily extends Vue {

        data() {
            return {
                date: new Date(),
                notes: '',
                mood: 0,
                motivation: 0,
                energy: 0,
                medication: ['attentin', 'modafinil'],
                supplementation: ['vitamin-c', 'vitamin-d'],
            };
        }

    };
</script>

<style scoped>

</style>
