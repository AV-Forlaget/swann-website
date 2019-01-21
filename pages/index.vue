<template>
  <section class="main-content">
    <div class="content-section">
      <div class="content-section__wrapper">
        <div class="content-block">
          <h2>Slides</h2>
        </div>
        <div class="content-block">
        </div>
      </div>
    </div>
    <div class="content-section content-section--lines">
      <div class="content-section__wrapper">
        <div class="content-block">
          <h2>Vi gør dine klubdrømme til virkelighed</h2>
          <p>Når I har en drøm om at opleve noget sammen, er I allerede langt. Der skal selvfølgelig penge til at indfrie den, og det kan vi hjælpe jer med.</p>
          <button class="btn">Tilmeld dig nu</button>
        </div>
        <div class="content-block">
            <img src="@/assets/img/sport-objects.svg" alt="" class="sport-objects">
        </div>
      </div>
    </div>
    <div class="content-section">
      <div class="content-section__wrapper">
        <div class="content-block">
          <h2>Testimonials</h2>
        </div>
        <div class="content-block">
        </div>
      </div>
    </div>
    <div class="content-section content-section--lines-reversed">
      <div class="content-section__wrapper">
        <div class="content-block">
          <h2>Få inspiration til dine kluboplevelser</h2>
          <p>Fælles oplevelser er den lim, der holder klubben sammen. De styrker det klubliv og venskab, vi alle nyder at være en del af.</p>
          <button class="btn">Se oplevelser</button>
        </div>
        <div class="content-block">
            <img src="@/assets/img/sport-objects.svg" alt="" class="sport-objects">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>