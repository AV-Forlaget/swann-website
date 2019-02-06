<template>
  <div class="main-app">
    <div id="fb-root"></div>
    <main-header></main-header>

    <nuxt/>

    <div class="main-footer">
      <div class="main-footer__wrapper">
        <div class="progress-bar">
          <div class="steps"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader.vue';
export default {
  components: {
    MainHeader
  }
}
</script>

