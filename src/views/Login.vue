<template>
    <b-container fluid>
        <b-form-row>
            <b-col md="4" offset-md="4">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group horizontal label-text-align="left" label="Email">
                        <b-form-input type="email"
                                      v-model="form.email"
                                      required
                                      placeholder="Enter email">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label-text-align="left" label="Password">
                        <b-form-input type="password"
                                      v-model="form.name"
                                      required
                                      placeholder="Enter password">
                        </b-form-input>
                    </b-form-group>
                    <br>
                    <b-form-group>
                        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
                            <b-form-checkbox value="me">Remember me</b-form-checkbox>
                        </b-form-checkbox-group>
                    </b-form-group>
                    <b-button-toolbar id="button-group">
                        <b-button-group class="mx-1">
                            <b-button type="submit" variant="primary">Login</b-button>
                        </b-button-group>
                        <b-button-group class="mx-1">
                            <b-button type="submit" variant="primary">Facebook</b-button>
                        </b-button-group>
                    </b-button-toolbar>
                </b-form>
            </b-col>
        </b-form-row>
    </b-container>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })

    export default class Login extends Vue {

        data() {
            return {
                form: {
                    email: '',
                    name: '',
                    food: null,
                    checked: []
                },
                foods: [
                    {text: 'Select One', value: null},
                    'Carrots', 'Beans', 'Tomatoes', 'Corn'
                ]
            };
        }

        show() {

        }

        onSubmit(event) {

        }

        onReset(event) {

        }

    };
</script>

<style scoped>

</style>
