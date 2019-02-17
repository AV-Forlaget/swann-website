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
      <dropdown placeholder="Choose voicetype">
        <li class="suggestion-list__item">Youthful</li>
        <li class="suggestion-list__item">Mature</li>
      </dropdown>
      <div class="field-header">
        <h4>Genre</h4>
      </div>
      <input-field name="Describe which genres you would like to narrate, and would fit you voice" inputType="textarea"></input-field>
        <checkbox name="Would you consider reading erotica?"></checkbox>
      <div class="field-header">
        <h4>Relevant education</h4>
      </div>
      <input-field name="Do you have relevant education?" inputType="textarea"></input-field>
      <div class="field-header">
        <h4>Relevant experience</h4>
      </div>
      <input-field name="Do you have relevant experience with narration?" inputType="textarea"></input-field>
      <div class="field-header">
        <h4>Links to audiobooks</h4>
      </div>
      <input-field name="Insert links, If available, of a selection of your narrated audiobooks" inputType="textarea"></input-field>
      <div class="field-header">
        <h4>Voicesample</h4>
        <span>Required</span>
      </div>
      <div class="voice-samples">
        <div class="voice-samples__block">
          <button class="remove-sample-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.8 23.8"><path d="M23.8,2.8,21,0,11.9,9.1,2.8,0,0,2.8l9.1,9.1L0,21l2.8,2.8,9.1-9.1L21,23.8,23.8,21l-9.1-9.1Z"/></svg></button>
          <dropdown placeholder="Choose language">
            <li class="suggestion-list__item">Arabic</li>
            <li class="suggestion-list__item">Bengali</li>
            <li class="suggestion-list__item">Bulgarian</li>
            <li class="suggestion-list__item">Danish</li>
          </dropdown>
          <div class="file-upload">
            <input type="file" name="file" id="voicesample" class="file-upload__input"/>
            <label for="voicesample" class="file-upload__label">Upload voicesample</label>
          </div>
        </div>
          <button class="btn btn--outline">Add sample</button>
      </div>
    </div>
    <div class="survey-buttons">
      <nuxt-link to="/step-2" class="btn btn--grey">Previous</nuxt-link>
      <nuxt-link to="/step-4" class="btn">Next</nuxt-link>
    </div>
  </section>
</template>

<script>
    import InputField from '~/components/input-field.vue';
    import Dropdown from '~/components/dropdown.vue';
    import Checkbox from '~/components/checkbox.vue';

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
      gender: ''
    }
  },
  components: {
      InputField,
      Dropdown,
      Checkbox
  }
}
</script>