<template>
  <section class="main-content">
    <div class="main-hero">
      <div class="main-hero__wrapper">
        <h1 class="main-hero__heading">Denmark</h1>
        <p class="main-hero__subheading">[Extended text about our history with the country and current activities]</p>
      </div>
    </div>
    <div class="content-section">
      <div class="content-section__wrapper">
        <h2 class="content-section__heading">Audio production in Denmark</h2>
        <p class="content-section__subheading">[Extended text about our history with audio production in the country and current activities]</p>
       <div class="ui-block">
        <div class="ui-block__header">
          <h3 class="ui-block__header__heading">Narrators</h3>
        </div>
        <div class="ui-block__body">
          <p class="ui-block__body__intro">[Extended text about our history with narrators in the country and current activities + country specific narration stuff]</p>
          <div class="narrator-sorting">
              <dropdown placeholder="Voice type" :options="voicetypeOptions"></dropdown>
              <dropdown placeholder="Location" :options="locationOptions"></dropdown>
              <input-field name="Search"></input-field>
          </div>
          <div class="narrator-grid">
            <div class="narrator-item">
              <div class="narrator-item__avatar">
                <img src="@/assets/img/icons/icon-male-narrator.svg" alt="">
              </div>
              <div class="narrator-item__content">
               <h4 class="narrator-name">Narrator name</h4>
                <span class="narrator-genre">Most read genre: Crime</span>
                <span class="narrator-narrations">Narrations: 65</span>
                <span class="narrator-price">Price: 125,00 EUR</span>
              </div>
              <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"/>
                    <polygon points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"/>
                  </svg>
              </button>
            </div>
            <div class="narrator-item">
              <div class="narrator-item__avatar">
                <img src="@/assets/img/icons/icon-female-narrator.svg" alt="">
              </div>
              <div class="narrator-item__content">
               <h4 class="narrator-name">Narrator name</h4>
                <span class="narrator-genre">Most read genre: Crime</span>
                <span class="narrator-narrations">Narrations: 65</span>
                <span class="narrator-price">Price: 125,00 EUR</span>
              </div>
              <button class="narrator-item__preview">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"/>
                    <polygon points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"/>
                  </svg>
              </button>
            </div>
              <div class="narrator-item">
              <div class="narrator-item__avatar">
                <img src="@/assets/img/icons/icon-male-narrator.svg" alt="">
              </div>
              <div class="narrator-item__content">
               <h4 class="narrator-name">Narrator name</h4>
                <span class="narrator-genre">Most read genre: Crime</span>
                <span class="narrator-narrations">Narrations: 65</span>
                <span class="narrator-price">Price: 125,00 EUR</span>
              </div>
              <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"/>
                    <polygon points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"/>
                  </svg>
              </button>
            </div>
            <div class="narrator-item">
              <div class="narrator-item__avatar">
                <img src="@/assets/img/icons/icon-female-narrator.svg" alt="">
              </div>
              <div class="narrator-item__content">
               <h4 class="narrator-name">Narrator name</h4>
                <span class="narrator-genre">Most read genre: Crime</span>
                <span class="narrator-narrations">Narrations: 65</span>
                <span class="narrator-price">Price: 125,00 EUR</span>
              </div>
              <button class="narrator-item__preview">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"/>
                    <polygon points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"/>
                  </svg>
              </button>
            </div>
              <div class="narrator-item">
              <div class="narrator-item__avatar">
                <img src="@/assets/img/icons/icon-male-narrator.svg" alt="">
              </div>
              <div class="narrator-item__content">
               <h4 class="narrator-name">Narrator name</h4>
                <span class="narrator-genre">Most read genre: Crime</span>
                <span class="narrator-narrations">Narrations: 65</span>
                <span class="narrator-price">Price: 125,00 EUR</span>
              </div>
              <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"/>
                    <polygon points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"/>
                  </svg>
              </button>
            </div>
            <div class="narrator-item">
              <div class="narrator-item__avatar">
                <img src="@/assets/img/icons/icon-female-narrator.svg" alt="">
              </div>
              <div class="narrator-item__content">
               <h4 class="narrator-name">Narrator name</h4>
                <span class="narrator-genre">Most read genre: Crime</span>
                <span class="narrator-narrations">Narrations: 65</span>
                <span class="narrator-price">Price: 125,00 EUR</span>
              </div>
              <button class="narrator-item__preview">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"/>
                    <polygon points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"/>
                  </svg>
              </button>
            </div>
              <div class="narrator-item">
              <div class="narrator-item__avatar">
                <img src="@/assets/img/icons/icon-male-narrator.svg" alt="">
              </div>
              <div class="narrator-item__content">
               <h4 class="narrator-name">Narrator name</h4>
                <span class="narrator-genre">Most read genre: Crime</span>
                <span class="narrator-narrations">Narrations: 65</span>
                <span class="narrator-price">Price: 125,00 EUR</span>
              </div>
              <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"/>
                    <polygon points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"/>
                  </svg>
              </button>
            </div>
            <div class="narrator-item">
              <div class="narrator-item__avatar">
                <img src="@/assets/img/icons/icon-female-narrator.svg" alt="">
              </div>
              <div class="narrator-item__content">
               <h4 class="narrator-name">Narrator name</h4>
                <span class="narrator-genre">Most read genre: Crime</span>
                <span class="narrator-narrations">Narrations: 65</span>
                <span class="narrator-price">Price: 125,00 EUR</span>
              </div>
              <button class="narrator-item__preview">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"/>
                    <polygon points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"/>
                  </svg>
              </button>
            </div>
              <div class="narrator-item">
              <div class="narrator-item__avatar">
                <img src="@/assets/img/icons/icon-male-narrator.svg" alt="">
              </div>
              <div class="narrator-item__content">
               <h4 class="narrator-name">Narrator name</h4>
                <span class="narrator-genre">Most read genre: Crime</span>
                <span class="narrator-narrations">Narrations: 65</span>
                <span class="narrator-price">Price: 125,00 EUR</span>
              </div>
              <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"/>
                    <polygon points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"/>
                  </svg>
              </button>
            </div>
            <div class="narrator-item">
              <div class="narrator-item__avatar">
                <img src="@/assets/img/icons/icon-female-narrator.svg" alt="">
              </div>
              <div class="narrator-item__content">
               <h4 class="narrator-name">Narrator name</h4>
                <span class="narrator-genre">Most read genre: Crime</span>
                <span class="narrator-narrations">Narrations: 65</span>
                <span class="narrator-price">Price: 125,00 EUR</span>
              </div>
              <button class="narrator-item__preview">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"/>
                    <polygon points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"/>
                  </svg>
              </button>
            </div>
              <div class="narrator-item">
              <div class="narrator-item__avatar">
                <img src="@/assets/img/icons/icon-male-narrator.svg" alt="">
              </div>
              <div class="narrator-item__content">
               <h4 class="narrator-name">Narrator name</h4>
                <span class="narrator-genre">Most read genre: Crime</span>
                <span class="narrator-narrations">Narrations: 65</span>
                <span class="narrator-price">Price: 125,00 EUR</span>
              </div>
              <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"/>
                    <polygon points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"/>
                  </svg>
              </button>
            </div>
            <div class="narrator-item">
              <div class="narrator-item__avatar">
                <img src="@/assets/img/icons/icon-female-narrator.svg" alt="">
              </div>
              <div class="narrator-item__content">
               <h4 class="narrator-name">Narrator name</h4>
                <span class="narrator-genre">Most read genre: Crime</span>
                <span class="narrator-narrations">Narrations: 65</span>
                <span class="narrator-price">Price: 125,00 EUR</span>
              </div>
              <button class="narrator-item__preview">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"/>
                    <polygon points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"/>
                  </svg>
              </button>
            </div>
              <div class="narrator-item">
              <div class="narrator-item__avatar">
                <img src="@/assets/img/icons/icon-male-narrator.svg" alt="">
              </div>
              <div class="narrator-item__content">
               <h4 class="narrator-name">Narrator name</h4>
                <span class="narrator-genre">Most read genre: Crime</span>
                <span class="narrator-narrations">Narrations: 65</span>
                <span class="narrator-price">Price: 125,00 EUR</span>
              </div>
              <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"/>
                    <polygon points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"/>
                  </svg>
              </button>
            </div>
            <div class="narrator-item">
              <div class="narrator-item__avatar">
                <img src="@/assets/img/icons/icon-female-narrator.svg" alt="">
              </div>
              <div class="narrator-item__content">
               <h4 class="narrator-name">Narrator name</h4>
                <span class="narrator-genre">Most read genre: Crime</span>
                <span class="narrator-narrations">Narrations: 65</span>
                <span class="narrator-price">Price: 125,00 EUR</span>
              </div>
              <button class="narrator-item__preview">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"/>
                    <polygon points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"/>
                  </svg>
              </button>
            </div>
              <div class="narrator-item">
              <div class="narrator-item__avatar">
                <img src="@/assets/img/icons/icon-male-narrator.svg" alt="">
              </div>
              <div class="narrator-item__content">
               <h4 class="narrator-name">Narrator name</h4>
                <span class="narrator-genre">Most read genre: Crime</span>
                <span class="narrator-narrations">Narrations: 65</span>
                <span class="narrator-price">Price: 125,00 EUR</span>
              </div>
              <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"/>
                    <polygon points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"/>
                  </svg>
              </button>
            </div>
            <div class="narrator-item">
              <div class="narrator-item__avatar">
                <img src="@/assets/img/icons/icon-female-narrator.svg" alt="">
              </div>
              <div class="narrator-item__content">
               <h4 class="narrator-name">Narrator name</h4>
                <span class="narrator-genre">Most read genre: Crime</span>
                <span class="narrator-narrations">Narrations: 65</span>
                <span class="narrator-price">Price: 125,00 EUR</span>
              </div>
              <button class="narrator-item__preview">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"/>
                    <polygon points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"/>
                  </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="content-section">
      <div class="content-section__wrapper">
        <h2 class="content-section__heading">Distribution in Denmark</h2>
        <p class="content-section__subheading">[Extended text about our history with Distribution in the country and current activities]</p>
       <div class="ui-block">
          <div class="ui-block__header">
            <h3 class="ui-block__header__heading">Digital audiobooks</h3>
          </div>
          <div class="ui-block__body">
          <p class="ui-block__body__intro">[text about how distribution of digital audiobooks works in general]</p>
          <div class="icon-list">

            <div class="icon-list__item">
              <img src="@/assets/img/icons/icon-audiofiles.svg" class="icon-list__icon" alt="" />
              <h4 class="icon-list__heading">Audiofiles</h4>
              <p class="icon-list__paragraph">[start of the process, there are files]</p>
            </div>

            <div class="icon-list__item">
              <img src="@/assets/img/icons/icon-distributor.svg" class="icon-list__icon" alt="" />
              <h4 class="icon-list__heading">Distributor</h4>
              <p class="icon-list__paragraph">[middle of the process, files are sent to server, in general]</p>
            </div>

            <div class="icon-list__item">
              <img src="@/assets/img/icons/icon-user.svg" class="icon-list__icon" alt="" />
              <h4 class="icon-list__heading">User</h4>
              <p class="icon-list__paragraph">[end of the process, user can listen to product]</p>
            </div>
          </div>

          </div>
        </div>

        <div class="ui-block">
          <div class="ui-block__header">
            <h3 class="ui-block__header__heading">Print on Demand</h3>
          </div>
          <div class="ui-block__body">
          <p class="ui-block__body__intro">[text about how distribution of analog audiobooks works in general]</p>
          <div class="icon-list">

            <div class="icon-list__item">
              <img src="@/assets/img/icons/icon-audiobook-cover.svg" class="icon-list__icon" alt="" />
              <h4 class="icon-list__heading">Audiobook Cover</h4>
              <p class="icon-list__paragraph">[text about how cover production works in general, and how good we are at it]</p>
            </div>

            <div class="icon-list__item">
              <img src="@/assets/img/icons/icon-registration.svg" class="icon-list__icon" alt="" />
              <h4 class="icon-list__heading">Registration</h4>
              <p class="icon-list__paragraph">[text about how registation works, country specific]</p>
            </div>

            <div class="icon-list__item">
              <img src="@/assets/img/icons/icon-production.svg" class="icon-list__icon" alt="" />
              <h4 class="icon-list__heading">Production</h4>
              <p class="icon-list__paragraph">[production workflow, our roles and the customers roles, in general]</p>
            </div>

             <div class="icon-list__item">
              <img src="@/assets/img/icons/icon-shipment.svg" class="icon-list__icon" alt="" />
              <h4 class="icon-list__heading">Shipment</h4>
              <p class="icon-list__paragraph">[how shipment and inventory works, in general]</p>
            </div>
          </div>

          </div>
        </div>

        <div class="ui-block">
          <div class="ui-block__header">
            <h3 class="ui-block__header__heading">Publishing</h3>
          </div>
          <div class="ui-block__body">
          <p class="ui-block__body__intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, assumenda laborum adipisci sed, et a nisi totam optio doloremque quae mollitia deleniti! Ea suscipit, ipsa ullam doloremque mollitia.</p>
          <div class="icon-list">

            <div class="icon-list__item">
              <img src="@/assets/img/icons/icon-cover-production.svg" class="icon-list__icon" alt="" />
              <h4 class="icon-list__heading">Cover production</h4>
              <p class="icon-list__paragraph">[how awesome our graphic designers are, and that they can produce covers]</p>
            </div>

            <div class="icon-list__item">
              <img src="@/assets/img/icons/icon-royalty.svg" class="icon-list__icon" alt="" />
              <h4 class="icon-list__heading">Royalty</h4>
              <p class="icon-list__paragraph">[how royalty works]</p>
            </div>

            <div class="icon-list__item">
              <img src="@/assets/img/icons/icon-consultance.svg" class="icon-list__icon" alt="" />
              <h4 class="icon-list__heading">Consultance</h4>
              <p class="icon-list__paragraph">[how much we know, and that we share that information, in general]</p>
            </div>

             <div class="icon-list__item">
              <img src="@/assets/img/icons/icon-translation.svg" class="icon-list__icon" alt="" />
              <h4 class="icon-list__heading">Translation</h4>
              <p class="icon-list__paragraph">[we can translate, we operate in many countries]</p>
            </div>
          </div>

          </div>
        </div>

         <div class="ui-block">
          <div class="ui-block__header">
            <h3 class="ui-block__header__heading">Streaming</h3>
          </div>
          <div class="ui-block__body">
          <p class="ui-block__body__intro">[text about how streaming works in in general]</p>
          <div class="icon-list">

            <div class="icon-list__item">
              <img src="@/assets/img/logos/logo-mofibo.svg" class="icon-list__icon icon-list__item--small" alt="" />
            </div>

            <div class="icon-list__item">
              <img src="@/assets/img/logos/logo-storytel.svg" class="icon-list__icon icon-list__item--small" alt="" />
            </div>

            <div class="icon-list__item">
              <img src="@/assets/img/logos/logo-nextory.svg" class="icon-list__icon" alt="" />
            </div>

             <div class="icon-list__item icon-list__item--large">
              <img src="@/assets/img/logos/logo-saxo.svg" class="icon-list__icon icon-list__item--large" alt="" />
            </div>
          </div>
          <p class="ui-block__body__intro">[streaming services from all countries]</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import Dropdown from '~/components/dropdown.vue';
    import InputField from '~/components/input-field.vue';
export default {
 data() {
    return {
      voicetypeOptions: [
        {
          text: 'Feminine',
          value: 'feminine'
        },
        {
          text: 'Masculine',
          value: 'masculine'
        },
        {
          text: 'Youthful',
          value: 'youthful'
        },
        {
          text: 'Mature',
          value: 'mature'
        }
      ],
       locationOptions: [
        {
          text: 'Denmark',
          value: 'denmark'
        },
        {
          text: 'Etc.',
          value: 'etc'
        }
      ],
    }
  },
  components: {
    Dropdown,
    InputField
  }
}
</script>
