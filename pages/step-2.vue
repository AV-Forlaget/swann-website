<template>
  <section class="main-content">
    <div class="modal-step">
      <h3>Narration</h3>
      <dropdown placeholder="Choose gender">
        <li class="suggestion-list__item">Male</li>
        <li class="suggestion-list__item">Female</li>
      </dropdown>
      <dropdown placeholder="Choose voicetype">
        <li class="suggestion-list__item">Youthful</li>
        <li class="suggestion-list__item">Mature</li>
      </dropdown>
      <input-field name="Genre" inputType="textarea"></input-field>
        <checkbox name="Would you consider reading erotica?"></checkbox>
      <input-field name="Relevant education" inputType="textarea"></input-field>
      <input-field name="Relevant experience" inputType="textarea"></input-field>
      <input-field name="Links to audiobooks" inputType="textarea"></input-field>
      <input-field name="Voicesample" inputType="textarea"></input-field>
        <div class="survey-buttons">
            <nuxt-link to="/step-1" class="btn btn--grey">Previous</nuxt-link>
            <nuxt-link to="/step-3" class="btn">Next</nuxt-link>
        </div>
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

    }
  },
  components: {
      InputField,
      Dropdown,
      Checkbox
  },
  head() {
    return {
      title: 'Narrator application',
      meta: [
         { hid: 'description', name: 'description', content: 'Swann Studios narrator application'}
      ]
    }
  }
}
</script>