<template>
  <section class="main-content">
    <div class="modal-step">
      <h3>Narration</h3>
      <input-field name="Choose gender"></input-field>
      <input-field name="Choose voicetype"></input-field>
      <input-field name="Genre"></input-field>
      <input-field name="Relevant education"></input-field>
      <input-field name="Relevant experience"></input-field>
      <input-field name="Links to audiobooks"></input-field>
      <input-field name="Voicesample"></input-field>
        <div class="survey-buttons">
            <nuxt-link to="/step-1" class="btn btn--grey">Previous</nuxt-link>
            <nuxt-link to="/step-3" class="btn">Next</nuxt-link>
        </div>
      </div>
  </section>
</template>

<script>
    import InputField from '~/components/input-field.vue';

export default {
  data() {
    return {

    }
  },
  components: {
      InputField
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