<template>
  <section class="main-content">
     <carousel :per-page="1" :pagination-enabled="true" :navigationEnabled="true" :autoplay="true" :autoplayTimeout="5000" :speed="1000"  v-if="showSlider">
        <slide v-for="(content, contentKey) in introSlides" :key="contentKey">
          <intro-slide :content="content"></intro-slide>
        </slide>
      </carousel>
      <div class="VueCarousel" v-if="!showSlider">
        <intro-slide v-for="(content, contentKey) in introSlides" :key="contentKey" :content="content" v-show="contentKey < 1"></intro-slide>
     </div>
    <div class="scroll-indicator"></div>
    <div class="content-section frontpage-audiobooks">
      <div class="content-section__wrapper content-section__wrapper--flex">
        <div class="content-section__col content-section__col--lg">
            <h2 class="content-section__heading">Audiobooks, podcast, audioarticles, and more</h2>
            <p class="content-section__text">At Swann Studio we aim to simplify the audio production workflow for our clients as much as possible.</p>
            <p class="content-section__text">Our agile software and constant focus on organisational efficiency makes us an ideal choice for publishers who work on a large scale.</p>
		        <nuxt-link class="btn" to="/audio">Read more</nuxt-link>
        </div>
        <div class="content-section__col content-section__col--sm">
            <img src="@/assets/img/mic-audiobooks.png" class="audiobooks-microphone-img" alt="" />
        </div>
      </div>
    </div>
    <div class="content-section frontpage-distribution">
      <div class="content-section__wrapper content-section__wrapper--flex">
        <div class="content-section__col content-section__col--lg">
            <h2 class="content-section__heading">Digital distribution, print-on-demand, streaming, publishing and more</h2>
            <p class="content-section__text">Digital distribution is handled through our web app and we can easily set up our API to deliver a publication to any additional destinations.</p>
            <p class="content-section__text">Physical publications can be ordered easily through our web app. We have 35 years of experience with making print-on-demand CDs, cooperate with fixed volume producers and offer graphical solutions, as well as general audio consultancy services.</p>
		        <nuxt-link class="btn" to="/distribution">Read more</nuxt-link>
        </div>
        <div class="content-section__col content-section__col--sm">
            <img src="@/assets/img/digital-distribution.png" class="digital-distribution-img" alt="" />
        </div>
      </div>
    </div>
    <div class="content-section frontpage-narrator">
      <div class="content-section__wrapper content-section__wrapper--flex">
        <div class="content-section__col content-section__col--lg">
            <h2 class="content-section__heading">Narrator catalogue</h2>
            <p class="content-section__text">Swann Studio has recording facilities in more than 12 countries. Locations include Copenhagen, Odense, Stockholm, Göteborg, Oslo, Helsinki, Amsterdam, Reykjavik, Paris, Hamburg and Berlin.</p>
            <p class="content-section__text">We have narrators for all kinds of texts and genres, and editors and producers who can accommodate specific production requirements and are willing to discuss any idea you might have.</p>
		        <nuxt-link class="btn" to="/audio#narratorSection">To the catalogue</nuxt-link>
        </div>
        <div class="content-section__col content-section__col--sm">
            <img src="@/assets/img/narrator-catalogue.png" class="narrator-catalogue-img" alt="" />
        </div>
      </div>
    </div>
     <div class="content-section frontpage-video">
      <div class="content-section__wrapper">
        <img @click="showVideo = true" src="@/assets/img/narrator-catalogue.png" alt="">
      </div>
    </div>

    <div class="content-section content-section--dark">
      <div class="content-section__wrapper">
        <h2 class="content-section__heading content-section__heading--center">Audio productions</h2>
        <div class="production-facts">
          <div class="production-facts__list">
            <p class="production-facts__item">
              <span class="production-facts__number" v-text="contentData.productionsLastYear">2013</span>
              <span class="production-facts__text">Productions last year</span>
            </p>

            <p class="production-facts__item">
              <span class="production-facts__number" v-text="contentData.productionsThisYear">230</span>
              <span class="production-facts__text">Productions this year</span>
            </p>

            <p class="production-facts__item">
              <span class="production-facts__number" v-text="contentData.narratorsTotal"></span>
              <span class="production-facts__text">Active narrators</span>
            </p>

            <p class="production-facts__item">
              <span class="production-facts__number" v-text="contentData.studiosTotal"></span>
              <span class="production-facts__text">Active studios</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section content-section--white">
      <div class="content-section__wrapper">
        <h2 class="content-section__heading content-section__heading--center">Partners</h2>
        <p class="content-section__text content-section__text--center">We produce and/or distribute audio for a wide range of clients and partners.</p>
        <div class="partners-grid">
          <div class="partners-item partners-item--medium">
            <img src="@/assets/img/logos/logo-alvilda.svg" alt="">
          </div>
          <div class="partners-item partners-item--large">
              <img src="@/assets/img/logos/logo-bibelselskabet.svg" alt="">
          </div>
           <div class="partners-item partners-item--medium">
            <img src="@/assets/img/logos/logo-bonnier.svg" alt="">
          </div>
          <div class="partners-item partners-item--small">
              <img src="@/assets/img/logos/logo-ck.svg" alt="">
          </div>
            <div class="partners-item">
            <img src="@/assets/img/logos/logo-dafolo.svg" alt="">
          </div>
          <div class="partners-item partners-item--extra-small">
              <img src="@/assets/img/logos/logo-forlagid.svg" alt="">
          </div>
          <div class="partners-item partners-item--medium">
              <img src="@/assets/img/logos/logo-gadsforlag.svg" alt="">
          </div>
           <div class="partners-item partners-item--medium">
            <img src="@/assets/img/logos/logo-grif.svg" alt="">
          </div>
          <div class="partners-item partners-item--extra-small">
              <img src="@/assets/img/logos/logo-gyldendal.svg" alt="">
          </div>
          <div class="partners-item">
            <img src="@/assets/img/logos/logo-harlequin.svg" alt="">
          </div>
          <div class="partners-item">
              <img src="@/assets/img/logos/logo-harpercollinsnordic.svg" alt="">
          </div>
          <div class="partners-item partners-item--small">
            <img src="@/assets/img/logos/logo-hoi.svg" alt="">
          </div>
          <div class="partners-item partners-item--medium">
              <img src="@/assets/img/logos/logo-hrferdinand.svg" alt="">
          </div>
            <div class="partners-item">
            <img src="@/assets/img/logos/logo-illustreretvidenskab.svg" alt="">
          </div>
          <div class="partners-item partners-item--medium">
              <img src="@/assets/img/logos/logo-jentas.svg" alt="">
          </div>
           <div class="partners-item partners-item--small">
            <img src="@/assets/img/logos/logo-klim.svg" alt="">
          </div>
          <div class="partners-item partners-item--small">
              <img src="@/assets/img/logos/logo-kristeligtdagblad.svg" alt="">
          </div>
           <div class="partners-item partners-item--small">
              <img src="@/assets/img/logos/logo-lr.svg" alt="">
          </div>
           <div class="partners-item partners-item--medium">
              <img src="@/assets/img/logos/logo-lust.svg" alt="">
          </div>
          <div class="partners-item partners-item--medium">
            <img src="@/assets/img/logos/logo-lydbokforlaget.svg" alt="">
          </div>
           <div class="partners-item">
              <img src="@/assets/img/logos/logo-modtryk.svg" alt="">
          </div>
           <div class="partners-item partners-item--small">
              <img src="@/assets/img/logos/logo-mofibo.svg" alt="">
          </div>
           <div class="partners-item partners-item--medium">
              <img src="@/assets/img/logos/logo-nextory.svg" alt="">
          </div>
           <div class="partners-item partners-item--small">
              <img src="@/assets/img/logos/logo-olga.svg" alt="">
          </div>
           <div class="partners-item">
              <img src="@/assets/img/logos/logo-palatium.svg" alt="">
          </div>
           <div class="partners-item">
              <img src="@/assets/img/logos/logo-peoplespress.svg" alt="">
          </div>
           <div class="partners-item">
              <img src="@/assets/img/logos/logo-polaris.svg" alt="">
          </div>
           <div class="partners-item partners-item--small">
              <img src="@/assets/img/logos/logo-politikensforlag.svg" alt="">
          </div>
           <div class="partners-item partners-item--medium">
              <img src="@/assets/img/logos/logo-rosinante.svg" alt="">
          </div>
           <div class="partners-item partners-item--medium">
              <img src="@/assets/img/logos/logo-saga.svg" alt="">
          </div>
           <div class="partners-item partners-item--extra-small">
              <img src="@/assets/img/logos/logo-storytel.svg" alt="">
          </div>
           <div class="partners-item partners-item--medium">
              <img src="@/assets/img/logos/logo-viatone.svg" alt="">
          </div>
        </div>
      </div>
    </div>

    <modal v-if="showVideo" :no-scroll="true" :is-open="true" @close="showVideo = false">
      <youtube v-if="videoId" :video-id="videoId" :player-vars="playerVars"></youtube>
    </modal>
  </section>
</template>

<script>
    import Dropdown from '~/components/dropdown.vue';
    import IntroSlide from '~/components/IntroSlide';
    import Modal from '~/components/modal';
export default {
 data() {
    return {
      showVideo: false,
      showSlider: false,
      videoId:  process.env.FRONTPAGE_VIDEO_ID,
      playerVars: {
        autoplay: 1
      },
      countryOptions: [
        {
          text: 'Denmark',
          value: 'denmark'
        },
        {
          text: 'Etc.',
          value: 'etc'
        }
      ],
       languageOptions: [
        {
          text: 'Danish',
          value: 'danish'
        },
        {
          text: 'Etc.',
          value: 'etc'
        }
      ],
      introSlides: [
        {
          header: 'Audiobooks since 1983',
          text: 'Swann Studio has more than 35 years of experience with audiobook production and has grown to be an international market leader having produced more that 2000 new titles in 2018 and having already expanded to 9 new countries in 2019 alone.',
          link: {
            text: 'Read more',
            href: '/audio'
          },
          class: 'audiobooks',
          image: require('~/assets/img/slides/slide-audiobooks.jpg')
        },
        {
          header: 'Worldwide reach',
          text: 'Digital distribution is handled through our web app and we produce CDs as print-on-demand or in fixed volumes. We can deliver your audio however and wherever you want it.',
          link: {
            text: 'Read more',
            href: '/distribution'
          },
          class: 'distribution',
          image: require('~/assets/img/slides/slide-distribution.jpg')
        },
        {
          header: 'Tech and Tradition',
          text: 'Swann Studio has lived through the transition from cassettes and reel tapes in the 1980s to the current situation where the market is becoming increasingly digital and audiobooks hold a stronger position than ever. We have employees that can handle, and assist in, all aspects of audiobook production, publication and distribution. And with the help of our Swann Studio app our customers can order a title in just a few minutes.',
          link: {
            text: 'Read more',
            href: '/about-us'
          },
          class: 'about',
          image: require('~/assets/img/slides/slide-about.jpg')
        }
      ],
    }
  },
  mounted() {
    this.showSlider = true;
    this.$store.dispatch('getContentData');
  },
  computed: {
    contentData() {
      return this.$store.state.contentData;
    }
  },
  components: {
    Dropdown,
    IntroSlide,
    Modal
  }
}
</script>
