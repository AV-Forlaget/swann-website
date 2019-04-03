<template>
  <section class="main-content">
    <div class="main-hero">
      <div class="main-hero__wrapper">
        <h1 class="main-hero__heading">Audiobooks since 1983</h1>
      </div>
    </div>
    <div class="content-section">
      <div class="content-section__wrapper">
      <h2 class="content-section__heading">[how nice we are]</h2>
      <p class="content-section__subheading">[more about the niceness]</p>

      <div class="service">

        <div class="service__audio service__card">
          <div class="service__header">
            <img src="@/assets/img/icons/icon-audio.svg" class="service__icon service__icon-audio" alt="" />
            <h3 class="service__heading">Audio</h3>
            <p class="service__paragraph">[quick introduction about our history with audio production and current activities]</p>
          </div>

          <div class="service__list icon-list">

            <div class="icon-list__item">
              <img src="@/assets/img/icons/icon-audiobooks.svg" class="icon-list__icon" alt="" />
              <h4 class="icon-list__heading">Audiobooks</h4>
              <p class="icon-list__paragraph">[quick introduction]</p>
            </div>

            <div class="icon-list__item">
              <img src="@/assets/img/icons/icon-articles.svg" class="icon-list__icon" alt="" />
              <h4 class="icon-list__heading">Articles</h4>
              <p class="icon-list__paragraph">[quick introduction]</p>
            </div>

            <div class="icon-list__item">
              <img src="@/assets/img/icons/icon-podcast.svg" class="icon-list__icon" alt="" />
              <h4 class="icon-list__heading">Podcast</h4>
              <p class="icon-list__paragraph">[quick introduction]</p>
            </div>

            <div class="icon-list__item">
              <img src="@/assets/img/icons/icon-digitization.svg" class="icon-list__icon" alt="" />
              <h4 class="icon-list__heading">Digitization</h4>
              <p class="icon-list__paragraph">[quick introduction]</p>
            </div>
          </div> <!-- END .service__list -->
      </div> <!-- END .service__audio -->


      <div class="service__distribution service__card">
        <div class="service__header">
          <img src="@/assets/img/icons/icon-distribution.svg" class="service__icon about__icon-audio" alt="" />
          <h3 class="service__heading">Distribution</h3>
          <p class="service__paragraph">[quick introduction about our history with distribution and current activities]</p>
        </div>

        <div class="service__list icon-list">

          <div class="icon-list__item">
            <img src="@/assets/img/icons/icon-audiofiles.svg" class="icon-list__icon" alt="" />
            <h4 class="icon-list__heading">Digital audiobooks</h4>
            <p class="icon-list__paragraph">[quick introduction]</p>
          </div>

          <div class="icon-list__item">
            <img src="@/assets/img/icons/icon-print-on-demand.svg" class="icon-list__icon" alt="" />
            <h4 class="icon-list__heading">Print-on-demand</h4>
            <p class="icon-list__paragraph">[quick introduction]</p>
          </div>

          <div class="icon-list__item">
            <img src="@/assets/img/icons/icon-streaming.svg" class="icon-list__icon" alt="" />
            <h4 class="icon-list__heading">Streaming</h4>
            <p class="icon-list__paragraph">[quick introduction]</p>
          </div>

          <div class="icon-list__item">
            <img src="@/assets/img/icons/icon-publishing.svg" class="icon-list__icon" alt="" />
            <h4 class="icon-list__heading">Publishing</h4>
            <p class="icon-list__paragraph">[quick introduction]</p>
          </div>
        </div> <!-- END .service__list -->
      </div> <!-- END .service__distribution -->


    </div> <!-- END .service -->
  </div> <!-- END .content-section -->

    </div>
    <div class="content-section content-section--dropdowns">
      <div class="content-section__wrapper">
        <h2 class="content-section__heading">Countries</h2>
        <p class="content-section__subheading">[quick introduction about our history with various countries and current activities]</p>
        <dropdown placeholder="Choose country" :options="countryOptions"></dropdown>
      </div>
    </div>

    <div class="content-section content-section--dark">
      <div class="content-section__wrapper">
        <h2 class="content-section__heading">Audio productions</h2>
        <p class="content-section__subheading">[rundown of productions and growth]</p>
        <div class="production-facts">
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
      </div>
    </div>

    <div class="content-section">
      <div class="content-section__wrapper">
        <h2 class="content-section__heading">Partners</h2>
        <p class="content-section__subheading">[something about our partners]</p>
        <div class="partners-grid">
          <div class="partners-item">
            <img src="" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <div class="content-section__wrapper">
        <h2 class="content-section__heading">Download printable brochure</h2>
        <div class="brochure-block">
            <div class="brochure-block__icon">
                <img src="@/assets/img/icons/icon-pdf.svg" alt="" />
            </div>
            <dropdown placeholder="Choose language" :options="languageOptions"></dropdown>
        </div>
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
