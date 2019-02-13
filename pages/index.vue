<template>
  <section class="main-content">
    <div class="modal-intro">
      <p>If you find yourself here, that means you are a potential narrator on our team here at Swann Studio.</p>
      <h3>We will be evaluating your application by:</h3>
    </div>
    <div class="evaluation-grid">
      <div class="evaluation-block">
        <img src="@/assets/img/icons/icon-voice-sample.svg" class="evaluation-block__img" alt="">
        <span class="evaluation-block__text">Voice sample</span>
      </div>
      <div class="evaluation-block">
      <img src="@/assets/img/icons/icon-experience.svg" class="evaluation-block__img" alt="">
        <span class="evaluation-block__text">Experience</span>
      </div>
      <div class="evaluation-block">
        <img src="@/assets/img/icons/icon-expected-salary.svg" class="evaluation-block__img" alt="">
        <span class="evaluation-block__text">Expected Salary</span>
      </div>
    </div>
    <div class="survey-buttons survey-buttons--center">
       <nuxt-link to="/step-2" class="btn">Begin</nuxt-link>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
  components: {
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