<template>
  <section class="main-content">
    <div class="modal-step">
      <h3>Other information</h3>
      <checkbox name="I have a recording studio in my home/office" :value="hasOwnStudio" @checked="(val) => hasOwnStudio = val"></checkbox>
      <checkbox name="A studio can be set up in my home/office" :value="canHaveStudio" @checked="(val) => canHaveStudio = val"></checkbox>
      <checkbox name="Swann Studio may display my name and sound sample on the publicly accessible part of their website" :value="publicDisplay" @checked="(val) => publicDisplay = val"></checkbox>
      <div class="field-header">
        <h4>Salary</h4>
        <span>Required</span>
      </div>
      <span class="field-text">Expected wage per hour of the finished audiobook.</span>
      <div class="label-input">
        <money class="input input-field has-text" v-model="hourlyWage" v-bind="money"></money>
        <label class="label">Your expected wage per finished hour of audiobook in euro"</label>
      </div>
      </div>
       <div class="terms-conditions">
        <a href="/terms_of_service.pdf" target="_blank">Terms of service</a>
        <checkbox name="I have read Swann Studio’s terms of service" :value="terms" @checked="(val) => terms = val"></checkbox>
      </div>
        <div class="survey-buttons">
            <nuxt-link to="/step-3" class="btn btn--grey">Previous</nuxt-link>
            <button @click="goToNextStep" class="btn btn--green" :disabled="valid" :class="{'btn--loading': loading}">Send <span class="btn__mobile-hide">application</span></button>
        </div>
        <p class="error-text" v-if="error">An error happened when sending the request... Have you already made an application?</p>
  </section>
</template>

<script>
    import InputField from '~/components/input-field.vue';
    import Dropdown from '~/components/dropdown.vue';
    import Checkbox from '~/components/checkbox.vue';
    import {Money} from 'v-money';
    import ValidateJS from 'validate.js';

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
      },
      loading: false,
      error: false
    }
  },
  watch: {
    hasOwnStudio() {
      this.$store.commit('data', {
        hasOwnStudio: this.hasOwnStudio
      });
    },
    canHaveStudio() {
      this.$store.commit('data', {
        canHaveStudio: this.canHaveStudio
      });
    },
    publicDisplay() {
      this.$store.commit('data', {
        publicDisplay: this.publicDisplay
      });
    },
    hourlyWage() {
      this.$store.commit('data', {
        salary: {
          hourlyWage: this.hourlyWage,
          currency: 'EUR'
        }
      });
    }
  },
  mounted() {
    this.$store.commit('step', 4);
    this.hasOwnStudio = this.dataModel.hasOwnStudio;
    this.canHaveStudio = this.dataModel.canHaveStudio;
    this.publicDisplay = this.dataModel.publicDisplay;
    this.hourlyWage = this.dataModel.salary.hourlyWage;
  },
  methods: {
    goToNextStep() {
      if(!this.valid) {
        this.loading = true;
        this.$store.dispatch('submit').then((res) => {
          this.$router.push({
            path: '/done'
          });
        }).catch((error) => {
          console.error(error);
          this.error = true;
          this.loading = false;
        });
      }
    }
  },
  computed: {
    valid() {
      return ValidateJS({
        terms: this.terms,
        hourlyWage: this.hourlyWage,
      }, {
        terms: {
          istrue: true 
        },
        hourlyWage: {
          presence: {
            allowEmpty: false
          },
          numericality: {
            greaterThan: 0
          }
        }
      });
    },
    dataModel() {
      return this.$store.state.data;
    },
  },
  components: {
      InputField,
      Dropdown,
      Checkbox,
      Money
  }
}
</script>