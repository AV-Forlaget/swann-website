<template>
  <div class="main-app">
    <div class="modal-box">
      <div class="modal-box__header">
        <img src="@/assets/img/swann-logo-icon.svg" class="modal-header__logo" alt="">
        <div class="modal-box__heading">
          <h2>Narrator application</h2>
          <span>Welcome to Swann Studios narrator application</span>
        </div>
        <button class="modal-box__header__close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.8 23.8"><path d="M23.8,2.8,21,0,11.9,9.1,2.8,0,0,2.8l9.1,9.1L0,21l2.8,2.8,9.1-9.1L21,23.8,23.8,21l-9.1-9.1Z"/></svg>
        </button>
      </div>
      <div class="progress-bar" v-if="currentStep < 5">
          <div class="progress-bar__fill" :style="{width: percent + '%'}"></div>
          <span class="progress-bar__text">Step {{ currentStep }} of 4</span>
      </div>
      <div class="modal-box__body modal-box__body--padding">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    this.$recaptchaLoaded().then(() => {
      this.$recaptcha('homepage').then((token) => {
        this.$store.commit('token', token);
      })
    });

    this.$nextTick(() => {
      if(!this.$store.state.started) {
        this.$router.push({
          path: '/'
        })
      }
    });
    
  },
  computed: {
    percent() {
      return (this.$store.state.step / 4) * 100
    },
    currentStep() {
      return this.$store.state.step;
    }
  }
}
</script>