<template>
  <section class="main-content">
    <div class="content-section">
      <carousel :per-page="1" :pagination-enabled="true">
        <slide>
          <div class="intro-slide">
            <div class="intro-slide__content">
              <h2 class="slide-heading slide-heading--orange">Din klub</h2>
              <p class="slide-text">drømmer om at opleve noget sammen, men I mangler penge</p>
            </div>
            <div class="intro-slide__image">
              <img src="@/assets/img/slide-illustration-01.svg" alt="" class="">
            </div>
          </div>
        </slide>
        <slide>
          <div class="intro-slide">
            <div class="intro-slide__content">
              <h2 class="slide-heading slide-heading--blue">Kluboplevelser.dk</h2>
              <p class="slide-text">leverer et kvalitetsprodukt til jer, som I kan tjene mange penge på</p>
            </div>
            <div class="intro-slide__image">
              <img src="@/assets/img/slide-illustration-02.svg" alt="" class="">
            </div>
          </div>
        </slide>
        <slide>
          <div class="intro-slide">
            <div class="intro-slide__content">
              <h2 class="slide-heading slide-heading--orange">Din klub</h2>
              <p class="slide-text">sælger varerne til venner og familie, hvor der betales via MobilePay</p>
            </div>
            <div class="intro-slide__image">
              <img src="@/assets/img/slide-illustration-03.svg" alt="" class="">
            </div> 
          </div>
        </slide>
        <slide>
          <div class="intro-slide">
            <div class="intro-slide__content">
              <h2 class="slide-heading slide-heading--orange">Din klub</h2>
              <p class="slide-text">får pengene samlet fra vores system, og så er I klar til at gøre jeres drøm til virkelighed</p>
            </div>
            <div class="intro-slide__image">
              <img src="@/assets/img/slide-illustration-04.svg" alt="" class="">
            </div> 
          </div>
        </slide>
      </carousel>
    </div>
    <div class="content-section content-section--lines content-section--white">
      <div class="content-section__wrapper">
        <div class="content-block">
          <h2>Vi gør dine klubdrømme til virkelighed</h2>
          <p>Når I har en drøm om at opleve noget sammen, er I allerede langt. Der skal selvfølgelig penge til at indfrie den, og det kan vi hjælpe jer med.</p>
          <nuxt-link to="/kontakt#contactBlock" class="btn">Kontakt os</nuxt-link>
        </div>
        <div class="content-block content-block--small">
            <img src="@/assets/img/sport-objects.svg" alt="" class="sport-objects">
        </div>
      </div>
    </div>
    <div class="content-section content-section--bg">
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
          <nuxt-link to="/oplevelser" class="btn">Se oplevelser</nuxt-link>
        </div>
        <div class="content-block">
            <img src="@/assets/img/oplevelser-cta.png" alt="" class="masked-image">
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