<template>
  <section class="main-content">
    <div class="modal-step">
      <h3>Other information</h3>
      <checkbox name="Do you have a recording studio in your home?" :value="hasOwnStudio" @checked="(val) => hasOwnStudio = val"></checkbox>
      <checkbox name="Can a studio be set up in your home/office?" :value="canHaveStudio" @checked="(val) => canHaveStudio = val"></checkbox>
      <checkbox name="May we display your name and sound sample on the publicly accesible part of our website?" :value="publicDisplay" @checked="(val) => publicDisplay = val"></checkbox>
      <div class="field-header">
        <h4>Salary</h4>
        <span>Required</span>
      </div>
        <div class="label-input">
          <money class="input input-field has-text" v-model="hourlyWage" v-bind="money"></money>
          <label class="label">Your expected wage per finished hour of audiobook in euro"</label>
        </div>
      </div>
       <div class="terms-conditions">
        <a href="#" target="_blank">Terms of service</a>
        <checkbox name="I have read Swann Studio’s terms of service" :value="terms" @checked="(val) => terms = val"></checkbox>
      </div>
        <div class="survey-buttons">
            <nuxt-link to="/step-3" class="btn btn--grey">Previous</nuxt-link>
            <button @click="goToNextStep" class="btn" :disabled="valid">Send <span class="btn__mobile-hide">application</span></button>
        </div>
  </section>
</template>

<script>
    import InputField from '~/components/input-field.vue';
    import Dropdown from '~/components/dropdown.vue';
    import Checkbox from '~/components/checkbox.vue';
    import {Money} from 'v-money';

export default {
  data() {
    return {
      hasOwnStudio: false,
      canHaveStudio: false,
      publicDisplay: false,
      hourlyWage: 0,
      terms: false,
      money: {
        decimal: ',',
        thousands: '.',
        prefix: ' ',
        suffix: ' EUR',
        precision: 2
      }
    }
  },
  mounted() {
    this.$store.commit('step', 4);
  },
  methods: {
    goToNextStep() {

    }
  },
  computed: {
    valid() {
      return null;
    }
  },
  components: {
      InputField,
      Dropdown,
      Checkbox,
      Money
  }
}
</script>