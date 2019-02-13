<template>
  <section class="main-content">
  <div class="modal-done">
      <h3>Thank you for your application [first name]</h3>
      <p>Due to a large amount of applications, response time may vary.</p>
      <p>Therefore we will only get back to the applicants relevant for the further application process.</p>
    </div>
        <div class="survey-buttons survey-buttons--center">
            <button class="btn">Close</button>
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