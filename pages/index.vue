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
          <slide v-for="(content, contentKey) in testimonals" :key="contentKey">
            <div class="content-section__wrapper">
              <testimonial :content="content"></testimonial>
            </div>
          </slide>
        </carousel>
    </div>
    <div class="content-section content-section--bg" v-if="!showSlider">
      <div class="content-section__wrapper" v-for="(content, contentKey) in testimonals" :key="contentKey" v-show="contentKey < 1">
        <testimonial :content="content"></testimonial>
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
import IntroSlide from '~/components/IntroSlide';
import Testimonial from '~/components/Testimonial';

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
      ],
      testimonals: [
        {
          name: 'Sylvester Lassen',
          job: 'U14-spiller',
          image: '/img/kluboplevelser-testimonial-sylvester-lassen.jpg',
          quote: 'Det var ikke svært, at være med til at samle pengene ind. MobilePay er nemt. Nu skal vi til Holland, og jeg glæder mig meget. Specielt til at vinde nogle kampe og have det sjovt.'
        },
        {
          name: 'Allan Pendegast',
          job: 'Forælder',
          image: '/img/kluboplevelser-testimonial-allan-pendegast.jpg',
          quote: 'Det har fungeret fuldstændig perfekt at rejse penge gennem kluboplevelser.dk. Det har været rart at få muligheden for at sælge noget, der har givet værdi til køberne i stedet for sådan noget som lodsedler. Jeg vil helt klart gerne anbefale sådan et projekt til andre.'
        },
        {
          name: 'Lars-Bo Christensen',
          job: 'Holdleder',
          image: '/img/kluboplevelser-testimonial-lars-bo-christensen.jpg',
          quote: 'Det har været en fantastisk måde til at inddrage hele holdet i at indsamle nogle midler til en tur. Vi kom rigtig fint i mål, og drengene har været godt engageret i det. Det har forældrene også, de skal lige som ind og hive dem ud af playstationen og sofaen, og det har været fint.'
        },
        {
          name: 'Jacob Nielsen',
          job: 'U14-spiller',
          image: '/img/kluboplevelser-testimonial-jacob-nielsen.jpg',
          quote: 'Jeg glæder mig rigtigt meget. Vi har aldrig været i udlandet før, så det bliver sjovt at komme ned og spille i et andet land og så forhåbentlig vinde. Jeg kom fint gennem at hjælpe til med at skaffe pengene.'
        },
        {
          name: 'Lars-Bo Christensen',
          job: 'Holdleder',
          image: '/img/kluboplevelser-testimonial-lars-bo-christensen.jpg',
          quote: 'Jeg har brugt det rigtigt meget, at jeg som holdleder har kunnet følge med online hele vejen gennem projektet. Jeg har fulgt med i, hvem der har solgt meget, og hvem jeg måske lige skulle prikke lidt til. Det er også meget sjovt at kunne bruge det til at fortælle holdet, hvor langt vi nu er nået.'
        },
        {
          name: 'Chresten Clemmesen',
          job: 'Klubformand',
          image: '/img/kluboplevelser-testimonial-chresten-clemmesen.jpg',
          quote: 'Efter det er gået så godt for vores U14-hold, er jeg sikker på, at også andre hold i klubben vil gå i gang, når de skal skaffe penge. Det vil jeg også anbefale.'
        }
      ]
    }
  },
  mounted() {
    this.showSlider = true;
  },
  components: {
    IntroSlide,
    Testimonial
  },
  head() {
    return {
      title: 'Kluboplevelser.dk',
      meta: [
         { hid: 'description', name: 'description', content: 'Vi gør dine klubdrømme til virkelighed'}
      ]
    }
  }
}
</script>