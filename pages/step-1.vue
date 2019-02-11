<template>
  <section class="main-content">
    <div class="modal-step">
      <h3>Your information</h3>
      <input-field name="Name"></input-field>
      <input-field name="E-mail"></input-field>
      <input-field name="Phonenumber"></input-field>
      <input-field name="Address line 1"></input-field>
      <input-field name="Address line 2"></input-field>
      <input-field name="Zip"></input-field>
      <input-field name="Country"></input-field>
        <div class="survey-buttons">
            <nuxt-link to="/" class="btn btn--grey">Previous</nuxt-link>
            <nuxt-link to="/step-2" class="btn">Next</nuxt-link>
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