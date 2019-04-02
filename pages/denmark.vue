<template>
  <section class="main-content">
    <div class="main-hero">
      <div class="main-hero__wrapper">
        <h1 class="main-hero__heading">Denmark</h1>
        <p class="main-hero__subheading">[Extended text about our history with the country and current activities]</p>
      </div>
    </div>
    <div class="content-section">
      <h2 class="nice__title">Audio production in Denmark</h2>
      <p class="nice__paragraph content-section__paragraph">[Extended text about our history with audio production in the country and current activities]</p>
    </div>
    <div class="nice content-section">
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
