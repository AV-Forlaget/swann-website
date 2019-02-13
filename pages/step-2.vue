<template>
  <section class="main-content">
    <div class="modal-step">
      <h3>Your information</h3>
      <div class="field-header">
        <h4>Name</h4>
        <span>Required</span>
      </div>
      <input-field name="Name"></input-field>
      <div class="field-header">
        <h4>E-mail</h4>
        <span>Required</span>
      </div>
      <input-field name="E-mail"></input-field>
      <div class="field-header">
        <h4>Phonenumber</h4>
        <span>Required</span>
      </div>
      <input-field name="Phonenumber"></input-field>
       <div class="field-header">
        <h4>Address</h4>
        <span>Required</span>
      </div>
      <div class="field-block">
        <input-field name="Address line 1"></input-field>
        <input-field name="Address line 2"></input-field>
        <input-field name="Zip"></input-field>
        <input-field name="Country"></input-field>
      </div>
    </div>
    <div class="survey-buttons">
      <nuxt-link to="/" class="btn btn--grey">Previous</nuxt-link>
      <nuxt-link to="/step-3" class="btn">Next</nuxt-link>
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