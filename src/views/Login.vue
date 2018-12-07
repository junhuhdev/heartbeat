<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group label-text-align="left" label="Email:">
                        <b-form-input id="exampleInput1"
                                      type="email"
                                      v-model="form.email"
                                      required
                                      placeholder="Enter email">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group label-text-align="left" label="Password:">
                        <b-form-input id="exampleInput2"
                                      type="password"
                                      v-model="form.name"
                                      required
                                      placeholder="Enter password">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="exampleGroup4">
                        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
                            <b-form-checkbox value="me">Remember me</b-form-checkbox>
                        </b-form-checkbox-group>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
            </div>
        </div>
    </div>
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
                ],
                show: true
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
