<template>
  <section class="main-content">
    <div class="modal-step">
      <h3>Narration</h3>
      <div class="field-header">
        <h4>Gender</h4>
        <span>Required</span>
      </div>
      <dropdown placeholder="Choose gender" :options="genderOptions" v-model="gender"></dropdown>
      <div class="field-header">
        <h4>Voicetype</h4>
        <span>Required</span>
      </div>
      <dropdown placeholder="Choose voicetype" :options="ageOptions" v-model="age"></dropdown>
      <div class="field-header">
        <h4>Genre</h4>
      </div>
      <input-field name="Describe which genres you would like to narrate, and would fit you voice" inputType="textarea" v-model="genres"></input-field>
        <checkbox name="Would you consider reading erotica?" :value="erotica" @checked="(val) => erotica = val"></checkbox>
      <div class="field-header">
        <h4>Relevant education</h4>
      </div>
      <input-field name="Do you have relevant education?" inputType="textarea" v-model="education"></input-field>
      <div class="field-header">
        <h4>Relevant experience</h4>
      </div>
      <input-field name="Do you have relevant experience with narration?" inputType="textarea" v-model="experience"></input-field>
      <div class="field-header">
        <h4>Links to audiobooks</h4>
      </div>
      <input-field name="Insert links, If available, of a selection of your narrated audiobooks" inputType="textarea" v-model="booksNarrated"></input-field>
      <div class="field-header">
        <h4>Voicesample</h4>
        <span>Required</span>
      </div>
      <div class="voice-samples">
          <voice-sample v-model="samples[sampleKey]" v-for="(sample, sampleKey) in samples" :uid="sampleKey" :key="sampleKey" @remove="removeSample(sampleKey)"></voice-sample>
          <button class="btn btn--outline" @click="addSample">Add sample</button>
      </div>
    </div>
    <div class="survey-buttons">
      <nuxt-link to="/step-2" class="btn btn--grey">Previous</nuxt-link>
      <button @click="goToNextStep" class="btn" :disabled="valid">Next</button>
    </div>
  </section>
</template>

<script>
    import InputField from '~/components/input-field.vue';
    import Dropdown from '~/components/dropdown.vue';
    import Checkbox from '~/components/checkbox.vue';
    import VoiceSample from '~/components/voice-sample.vue';
    import ValidateJS from 'validate.js';

export default {
  data() {
    return {
      genderOptions: [
        {
          text: 'Male',
          value: 'male'
        },
        {
          text: 'Female',
          value: 'female'
        }
      ],
      ageOptions: [
        {
          text: 'Youthful',
          value: 'young'
        },
        {
          text: 'Mature',
          value: 'mature'
        }
      ],
      age: '',
      gender: '',
      samples: [{
        language: '',
        data: null
      }],
      erotica: false,
      genres: '',
      education: '',
      experience: '',
      booksNarrated: ''
    }
  },
  mounted() {
    this.$store.commit('step', 3);
  },
  methods: {
    addSample() {
      this.samples.push({
        language: '',
        data: null
      });
    },
    removeSample(samplekey) {
      this.samples.splice(samplekey, 1);
    },
    goToNextStep() {
      this.$router.push({
        path: '/step-4'
      });
    },
  },
  computed: {
    valid() {
      return ValidateJS({
        age: this.age,
        gender: this.gender,
        samples: this.samples
      }, {
        age: {
          presence: {
            allowEmpty: false
          }
        },
        gender: {
          presence: {
            allowEmpty: false
          }
        },
        samples: {
          array: {
            language: {
              presence: {
                allowEmpty: false
              }
            },
            data: {
              presence: {
                allowEmpty: false
              }
            }
          }
        }
      });
    }
  },
  components: {
      InputField,
      Dropdown,
      Checkbox,
      VoiceSample
  }
}
</script>