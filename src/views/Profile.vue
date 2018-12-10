<template>
    <b-container>
        <b-form-row>
            <b-col md="6" offset-md="3">
                <b-form>
                    <b-form-group horizontal label-text-align="left" label="Name">
                        <b-form-input id="name"
                                      type="text"
                                      v-model="name"
                                      required
                                      placeholder="Enter name">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group horizontal label-text-align="left" label="Email">
                        <b-form-input id="email"
                                      type="email"
                                      v-model="email"
                                      required
                                      placeholder="Enter email">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group horizontal label-text-align="left" label="Age">
                        <b-form-input id="age"
                                      type="number"
                                      v-model="age"
                                      required
                                      placeholder="Enter age">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group horizontal label-text-align="left" label="Etnicity">
                        <b-form-select v-model="etnicity" :options="['SWEDEN', 'KOREA']" class="mb-3"></b-form-select>
                    </b-form-group>

                    <b-form-group horizontal label-text-align="left" label="Country">
                        <b-form-select v-model="country" :options="['SWEDEN', 'KOREA']" class="mb-3"></b-form-select>
                    </b-form-group>

                    <b-form-group horizontal label-text-align="left" label="Gender">
                        <b-form-select v-model="gender" :options="['MALE', 'FEMALE']" class="mb-3"></b-form-select>
                    </b-form-group>

                    <b-form-group horizontal label-text-align="left" label="Weight">
                        <b-form-input id="weight"
                                      type="number"
                                      v-model="weight"
                                      required
                                      placeholder="Enter weight">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group horizontal label-text-align="left" label="Height">
                        <b-form-input id="height"
                                      type="number"
                                      v-model="height"
                                      required
                                      placeholder="Enter height">
                        </b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Save changes</b-button>
                </b-form>
            </b-col>
        </b-form-row>
    </b-container>
</template>

<script>
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({})

  export default class Profile extends Vue {
    data () {
      return {
        name: 'Jun Huh',
        email: 'junhuhdev@gmail.com',
        age: 27,
        etnicity: 'KOREA',
        country: 'SWEDEN',
        gender: 'MALE',
        weight: 70,
        height: 170,
      };

    }
  };
</script>

<style scoped>

</style>
