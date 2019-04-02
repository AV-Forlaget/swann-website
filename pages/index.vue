<template>
  <section class="main-content">
    <div class="main-hero">
      <div class="main-hero__wrapper">
        <h1 class="main-hero__heading">Audiobooks since 1983</h1>
      </div>
    </div>
    <div class="nice content-section">
      <h2 class="nice__title">[how nice we are]</h2>
      <p class="nice__paragraph content-section__paragraph">[more about the niceness]</p>
    </div>

    <div class="about content-section">
      <div class="about__card">
        <div class="about__header">
          <img src="#" class="about__icon about__icon-audio" alt="" />
          <h3 class="about__title"></h3>
          <p class="about__paragraph"></p>
        </div>

        <div class="about__list">
          <div class="about__item">
            
          </div>
        </div>
      </div>
    </div>


    <div class="countries content-section">
      <h2 class="countries__title">Countries</h2>
      <p class="countries__paragraph content-section__paragraph">[quick introduction about our history with various countries and current activities]</p>
      <dropdown placeholder="Choose country" :options="countryOptions"></dropdown>
    </div>


    <div class="production-facts content-section">
      <h2 class="production-facts__title">Audio productions</h2>
      <p class="production-facts__paragraph content-section__paragraph">[rundown of productions and growth]</p>

      <div class="production-facts__list">

        <p class="production-facts__item">
          <span class="production-facts__number">2013</span>
          <span class="production-facts__text">Productions last year</span>
        </p>

        <p class="production-facts__item">
          <span class="production-facts__number">230</span>
          <span class="production-facts__text">Productions this year</span>
        </p>

        <p class="production-facts__item">
          <span class="production-facts__number">405</span>
          <span class="production-facts__text">Active narrators</span>
        </p>

        <p class="production-facts__item">
          <span class="production-facts__number">89</span>
          <span class="production-facts__text">Active studios</span>
        </p>
      </div>
    </div>


    <div class="partners content-section">
      <h2 class="partners__title">Partners</h2>
      <p class="partners__paragraph content-section__paragraph">[something about our partners]</p>

      <div class="partners__list">
        <img src="#" class="partners__logo" alt="Some company name" />
      </div>
    </div>


    <div class="brochure content-section">
      <h2 class="brochure__title">Download printable brochure</h2>
      <div class="brochure__select-area">
        <div class="brochure__icon">pdf</div>
        <dropdown placeholder="Choose language" :options="languageOptions"></dropdown>
      </div>
    </div>
  </section>
</template>

<script>
    import Dropdown from '~/components/dropdown.vue';
export default {
 data() {
    return {
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
    }
  },
  components: {
    Dropdown
  }
}
</script>
