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
    <div class="content-section content-section--lines content-section--white">
      <div class="content-section__wrapper">
        <div class="content-block">
          <h2>Vi gør dine klubdrømme til virkelighed</h2>
          <p>Det gode liv. Et foreningsliv i Danmark, der giver alle mulighed for at få gode oplevelser og sunde sociale kompetencer funderet i lokal frivillighed.</p>
          <nuxt-link to="/kontakt#contactBlock" class="btn">Tilmeld dig nu</nuxt-link>
        </div>
        <div class="content-block content-block--small">
            <img src="@/assets/img/sport-objects.svg" alt="" class="sport-objects">
        </div>
      </div>
    </div>
    <div class="content-section content-section--bg">
      <div class="content-section__wrapper">
        <div class="testimonial-block">
          <div class="testimonial-person">
            <div class="testimonial-person__avatar">
              <div class="testimonial-person__avatar__img">
                
              </div>
            </div>
            <div class="testimonial-person__content">
              <span class="testimonial-person__content__name">Fornavn Efternavn</span>
              <span class="testimonial-person__content__job">Titel, Virksomhed/Klub</span>
            </div>
          </div>
          <div class="testimonial-qoute">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content-section content-section--lines-reversed">
      <div class="content-section__wrapper">
        <div class="content-block">
          <h2>Få inspiration til dine kluboplevelser</h2>
          <p>kluboplevelser.dk vil gøre det attraktivt at deltage i frivilligt foreningsarbejde ved at stille en platform til rådighed, der sikrer foreningerne en nem og billig vej til at samle penge ind via salg af klubrelaterede produkter.</p>
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