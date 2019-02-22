<template>
  <section class="main-content">
  <div class="modal-done">
      <h3>Thank you for your application {{ dataModel.name }}</h3>
      <p>Due to a large amount of applications, response time may vary.</p>
      <p>Therefore we will only get back to the applicants relevant for the further application process.</p>
    </div>
        <div class="survey-buttons survey-buttons--center">
            <button class="btn" @click="close">Close</button>
        </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('step', 5);
  },
  methods: {
    close() {
      window.location = process.env.CLOSE_URL;
    }
  },
  computed: {
    dataModel() {
      return this.$store.state.data;
    }
  }
}
</script>