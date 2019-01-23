<template>
  <section class="main-content">
    <div class="content-section">
      <div class="content-section__wrapper">
        <carousel :per-page="1" :pagination-enabled="true">
          <slide>
                    <div class="content-block">
                      <h2>Slide 1</h2>
                    </div>
          </slide>
          <slide>
                    <div class="content-block">
                      <h2>Slide 2</h2>
                    </div>
          </slide>
           <slide>
                    <div class="content-block">
                      <h2>Slide 3</h2>
                    </div>
          </slide>
          <slide>
                    <div class="content-block">
                      <h2>Slide 4</h2>
                    </div>
          </slide>
        </carousel>
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