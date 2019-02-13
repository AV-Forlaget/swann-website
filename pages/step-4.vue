<template>
  <section class="main-content">
    <div class="modal-step">
      <h3>Other information</h3>
      <checkbox name="Do you have a recording studio in your home?"></checkbox>
      <checkbox name="Can a studio be set up in your home/office?"></checkbox>
      <checkbox name="May we display your name and sound sample on the publicly accesible
part of our website?"></checkbox>
      <input-field name="Salary"></input-field>
      </div>
       <div class="terms-conditions">
        <a href="#" target="_blank">Terms of service</a>
        <checkbox name="I have read Swann Studio’s terms of service"></checkbox>
      </div>
       <div class="human-confirmation" style="padding:1em; box-sizing:border-box; background:#eee;">
        <p>I'm not a robot</p>
      </div>
        <div class="survey-buttons">
            <nuxt-link to="/step-3" class="btn btn--grey">Previous</nuxt-link>
            <nuxt-link to="/done" class="btn btn--green">Send application</nuxt-link>
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