<template>
  <section class="main-content">
    <div class="content-section" v-if="showSlider">
      <carousel :per-page="1" :pagination-enabled="true">
        <slide v-for="(content, contentKey) in introSlides" :key="contentKey">
          <intro-slide :content="content"></intro-slide>
        </slide>
      </carousel>
    </div>
    <div class="content-section" v-if="!showSlider">
      <intro-slide v-for="(content, contentKey) in introSlides" :key="contentKey" :content="content" v-show="contentKey < 1"></intro-slide>
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
    <div class="content-section content-section--bg" v-if="showSlider">
        <carousel :per-page="1" :pagination-enabled="true">
          <slide>
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
                <div class="testimonial-quote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                </div>
              </div>
            </div>
          </slide>
            <slide>
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
                <div class="testimonial-quote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                </div>
              </div>
            </div>
          </slide>
            <slide>
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
                <div class="testimonial-quote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                </div>
              </div>
            </div>
          </slide>
        </carousel>
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
import IntroSlide from '~/components/IntroSlide';

export default {
  data() {
    return {
      showSlider: false,
      introSlides: [
        {
          header: 'Din klub',
          text: 'drømmer om at opleve noget sammen, men I mangler penge',
          type: 'orange',
          image: '/img/slide-illustration-01.svg'
        },
        {
          header: 'Kluboplevelser.dk',
          text: 'leverer et kvalitetsprodukt til jer, som I kan tjene mange penge på',
          type: 'blue',
          image: '/img/slide-illustration-02.svg'
        },
        {
          header: 'Din klub',
          text: 'sælger varerne til venner og familie, hvor der betales via MobilePay',
          type: 'orange',
          image: '/img/slide-illustration-03.svg'
        },
        {
          header: 'Din klub',
          text: 'får pengene samlet fra vores system, og så er I klar til at gøre jeres drøm til virkelighed',
          type: 'orange',
          image: '/img/slide-illustration-04.svg'
        },
      ]
    }
  },
  mounted() {
    this.showSlider = true;
  },
  components: {
    IntroSlide
  }
}
</script>