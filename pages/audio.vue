<template>
  <section class="main-content">
    <div class="main-hero">
      <div class="main-hero__wrapper">
        <h1 class="main-hero__heading">Audio</h1>
        <p
          class="main-hero__subheading"
        >[Extended text about our history with audio in general and current activities]</p>
      </div>
    </div>
    <div class="content-section content-section--white">
      <div class="content-section__wrapper">
        <h2 class="content-section__heading">Audio production</h2>
        <p
          class="content-section__text"
        >[Extended text about our history with audio production in general and current activities]</p>
        <div class="audio-flow">
          <div class="audio-flow__block audio-flow__block--studio">
            <img src="@/assets/img/swann-studio-app.png" alt class="audio-flow__block__img">
            <h4 class="audio-flow__block__heading">Swann studio app</h4>
            <p
              class="audio-flow__block__text"
            >[we have an awesome app that you can use, and it makes everything easy]</p>
            <img src="@/assets/img/lines/line-studio-app.svg" alt class="audio-flow__block__line">
          </div>
          <div class="audio-flow__block audio-flow__block--order">
            <img src="@/assets/img/swann-app-order.png" alt class="audio-flow__block__img">
            <h4 class="audio-flow__block__heading">Order</h4>
            <p class="audio-flow__block__text">[this is how you order an audio production]</p>
            <img src="@/assets/img/lines/line-order.svg" alt class="audio-flow__block__line">
          </div>
          <div class="audio-flow__block audio-flow__block--narrator">
            <img src="@/assets/img/swann-choose-narrator.jpg" alt class="audio-flow__block__img">
            <h4 class="audio-flow__block__heading">Choose narrator</h4>
            <p class="audio-flow__block__text">[this is how you choose a narrator]</p>
            <img src="@/assets/img/lines/line-narrator.svg" alt class="audio-flow__block__line">
          </div>
          <div class="audio-flow__block audio-flow__block--upload">
            <img src="@/assets/img/icons/icon-jpg-pdf.svg" alt class="audio-flow__block__img">
            <h4 class="audio-flow__block__heading">Upload files</h4>
            <p class="audio-flow__block__text">[this is how you upload files]</p>
            <img src="@/assets/img/lines/line-upload.svg" alt class="audio-flow__block__line">
          </div>
          <div class="audio-flow__block audio-flow__block--distribution">
            <img src="@/assets/img/icons/icon-audiofiles.svg" alt class="audio-flow__block__img">
            <h4 class="audio-flow__block__heading">Distribution</h4>
            <p
              class="audio-flow__block__text"
            >[the audio is now recorded and mastered, and sent to you]</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content-section content-section--bg-color">
      <div class="content-section__wrapper">
        <h2 class="content-section__heading">Formats</h2>
        <p class="content-section__text">[introducion to the various formats]</p>
        <div class="ui-block ui-block--formats">
          <div class="ui-block__header">
            <h3 class="ui-block__header__heading">Audiobooks</h3>
          </div>
          <div class="ui-block__body">
            <img src="@/assets/img/icons/icon-audiobooks.svg" class="ui-block__icon" alt>
            <p class="ui-block__body__intro">[long text about audiobooks]</p>
          </div>
        </div>
        <div class="block-grid">
          <div class="ui-block ui-block--formats">
            <div class="ui-block__header">
              <h3 class="ui-block__header__heading">Articles</h3>
            </div>
            <div class="ui-block__body">
              <img src="@/assets/img/icons/icon-articles.svg" alt>
              <p
                class="ui-block__body__intro"
              >[text about how production of articles to audio works]</p>
            </div>
          </div>
          <div class="ui-block ui-block--formats">
            <div class="ui-block__header">
              <h3 class="ui-block__header__heading">Podcast</h3>
            </div>
            <div class="ui-block__body">
              <img src="@/assets/img/icons/icon-podcast.svg" alt>
              <p class="ui-block__body__intro">[text about how production of podcasts works]</p>
            </div>
          </div>
          <div class="ui-block ui-block--formats">
            <div class="ui-block__header">
              <h3 class="ui-block__header__heading">Digitization</h3>
            </div>
            <div class="ui-block__body">
              <img src="@/assets/img/icons/icon-digitization.svg" alt>
              <p class="ui-block__body__intro">[text about how of digitization of audiotapes works]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-section content-section--white">
      <div class="content-section__wrapper">
        <h2 class="content-section__heading">Narration</h2>
        <p
          class="content-section__text"
        >[text about narration and stuff, Paramount for the customer/listener and therefore for the publisher. An intimate process, Drives the story forward, A mutual relationship]</p>
        <div class="ui-block">
          <div class="ui-block__header">
            <h3 class="ui-block__header__heading">Narrators</h3>
          </div>
          <div class="ui-block__body">
            <p
              class="ui-block__body__intro"
            >[Extended text about our history with narrators in the country and current activities + country specific narration stuff]</p>
            <div class="narrator-sorting">
              <dropdown placeholder="Voice type" :options="voicetypeOptions"></dropdown>
              <dropdown placeholder="Location" :options="locationOptions"></dropdown>
              <input-field name="Search"></input-field>
            </div>
            <div class="narrator-grid">
              <div class="narrator-item">
                <div class="narrator-item__avatar">
                  <img src="@/assets/img/icons/icon-male-narrator.svg" alt>
                </div>
                <div class="narrator-item__content">
                  <h4 class="narrator-name">Narrator name</h4>
                  <span class="narrator-genre">Most read genre: Crime</span>
                  <span class="narrator-narrations">Narrations: 65</span>
                  <span class="narrator-price">Price: 125,00 EUR</span>
                </div>
                <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"></circle>
                    <polygon
                      points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"
                    ></polygon>
                  </svg>
                </button>
              </div>
              <div class="narrator-item">
                <div class="narrator-item__avatar">
                  <img src="@/assets/img/icons/icon-female-narrator.svg" alt>
                </div>
                <div class="narrator-item__content">
                  <h4 class="narrator-name">Narrator name</h4>
                  <span class="narrator-genre">Most read genre: Crime</span>
                  <span class="narrator-narrations">Narrations: 65</span>
                  <span class="narrator-price">Price: 125,00 EUR</span>
                </div>
                <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"></circle>
                    <polygon
                      points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"
                    ></polygon>
                  </svg>
                </button>
              </div>
              <div class="narrator-item">
                <div class="narrator-item__avatar">
                  <img src="@/assets/img/icons/icon-male-narrator.svg" alt>
                </div>
                <div class="narrator-item__content">
                  <h4 class="narrator-name">Narrator name</h4>
                  <span class="narrator-genre">Most read genre: Crime</span>
                  <span class="narrator-narrations">Narrations: 65</span>
                  <span class="narrator-price">Price: 125,00 EUR</span>
                </div>
                <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"></circle>
                    <polygon
                      points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"
                    ></polygon>
                  </svg>
                </button>
              </div>
              <div class="narrator-item">
                <div class="narrator-item__avatar">
                  <img src="@/assets/img/icons/icon-female-narrator.svg" alt>
                </div>
                <div class="narrator-item__content">
                  <h4 class="narrator-name">Narrator name</h4>
                  <span class="narrator-genre">Most read genre: Crime</span>
                  <span class="narrator-narrations">Narrations: 65</span>
                  <span class="narrator-price">Price: 125,00 EUR</span>
                </div>
                <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"></circle>
                    <polygon
                      points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"
                    ></polygon>
                  </svg>
                </button>
              </div>
              <div class="narrator-item">
                <div class="narrator-item__avatar">
                  <img src="@/assets/img/icons/icon-male-narrator.svg" alt>
                </div>
                <div class="narrator-item__content">
                  <h4 class="narrator-name">Narrator name</h4>
                  <span class="narrator-genre">Most read genre: Crime</span>
                  <span class="narrator-narrations">Narrations: 65</span>
                  <span class="narrator-price">Price: 125,00 EUR</span>
                </div>
                <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"></circle>
                    <polygon
                      points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"
                    ></polygon>
                  </svg>
                </button>
              </div>
              <div class="narrator-item">
                <div class="narrator-item__avatar">
                  <img src="@/assets/img/icons/icon-female-narrator.svg" alt>
                </div>
                <div class="narrator-item__content">
                  <h4 class="narrator-name">Narrator name</h4>
                  <span class="narrator-genre">Most read genre: Crime</span>
                  <span class="narrator-narrations">Narrations: 65</span>
                  <span class="narrator-price">Price: 125,00 EUR</span>
                </div>
                <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"></circle>
                    <polygon
                      points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"
                    ></polygon>
                  </svg>
                </button>
              </div>
              <div class="narrator-item">
                <div class="narrator-item__avatar">
                  <img src="@/assets/img/icons/icon-male-narrator.svg" alt>
                </div>
                <div class="narrator-item__content">
                  <h4 class="narrator-name">Narrator name</h4>
                  <span class="narrator-genre">Most read genre: Crime</span>
                  <span class="narrator-narrations">Narrations: 65</span>
                  <span class="narrator-price">Price: 125,00 EUR</span>
                </div>
                <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"></circle>
                    <polygon
                      points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"
                    ></polygon>
                  </svg>
                </button>
              </div>
              <div class="narrator-item">
                <div class="narrator-item__avatar">
                  <img src="@/assets/img/icons/icon-female-narrator.svg" alt>
                </div>
                <div class="narrator-item__content">
                  <h4 class="narrator-name">Narrator name</h4>
                  <span class="narrator-genre">Most read genre: Crime</span>
                  <span class="narrator-narrations">Narrations: 65</span>
                  <span class="narrator-price">Price: 125,00 EUR</span>
                </div>
                <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"></circle>
                    <polygon
                      points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"
                    ></polygon>
                  </svg>
                </button>
              </div>
              <div class="narrator-item">
                <div class="narrator-item__avatar">
                  <img src="@/assets/img/icons/icon-male-narrator.svg" alt>
                </div>
                <div class="narrator-item__content">
                  <h4 class="narrator-name">Narrator name</h4>
                  <span class="narrator-genre">Most read genre: Crime</span>
                  <span class="narrator-narrations">Narrations: 65</span>
                  <span class="narrator-price">Price: 125,00 EUR</span>
                </div>
                <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"></circle>
                    <polygon
                      points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"
                    ></polygon>
                  </svg>
                </button>
              </div>
              <div class="narrator-item">
                <div class="narrator-item__avatar">
                  <img src="@/assets/img/icons/icon-female-narrator.svg" alt>
                </div>
                <div class="narrator-item__content">
                  <h4 class="narrator-name">Narrator name</h4>
                  <span class="narrator-genre">Most read genre: Crime</span>
                  <span class="narrator-narrations">Narrations: 65</span>
                  <span class="narrator-price">Price: 125,00 EUR</span>
                </div>
                <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"></circle>
                    <polygon
                      points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"
                    ></polygon>
                  </svg>
                </button>
              </div>
              <div class="narrator-item">
                <div class="narrator-item__avatar">
                  <img src="@/assets/img/icons/icon-male-narrator.svg" alt>
                </div>
                <div class="narrator-item__content">
                  <h4 class="narrator-name">Narrator name</h4>
                  <span class="narrator-genre">Most read genre: Crime</span>
                  <span class="narrator-narrations">Narrations: 65</span>
                  <span class="narrator-price">Price: 125,00 EUR</span>
                </div>
                <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"></circle>
                    <polygon
                      points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"
                    ></polygon>
                  </svg>
                </button>
              </div>
              <div class="narrator-item">
                <div class="narrator-item__avatar">
                  <img src="@/assets/img/icons/icon-female-narrator.svg" alt>
                </div>
                <div class="narrator-item__content">
                  <h4 class="narrator-name">Narrator name</h4>
                  <span class="narrator-genre">Most read genre: Crime</span>
                  <span class="narrator-narrations">Narrations: 65</span>
                  <span class="narrator-price">Price: 125,00 EUR</span>
                </div>
                <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"></circle>
                    <polygon
                      points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"
                    ></polygon>
                  </svg>
                </button>
              </div>
              <div class="narrator-item">
                <div class="narrator-item__avatar">
                  <img src="@/assets/img/icons/icon-male-narrator.svg" alt>
                </div>
                <div class="narrator-item__content">
                  <h4 class="narrator-name">Narrator name</h4>
                  <span class="narrator-genre">Most read genre: Crime</span>
                  <span class="narrator-narrations">Narrations: 65</span>
                  <span class="narrator-price">Price: 125,00 EUR</span>
                </div>
                <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"></circle>
                    <polygon
                      points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"
                    ></polygon>
                  </svg>
                </button>
              </div>
              <div class="narrator-item">
                <div class="narrator-item__avatar">
                  <img src="@/assets/img/icons/icon-female-narrator.svg" alt>
                </div>
                <div class="narrator-item__content">
                  <h4 class="narrator-name">Narrator name</h4>
                  <span class="narrator-genre">Most read genre: Crime</span>
                  <span class="narrator-narrations">Narrations: 65</span>
                  <span class="narrator-price">Price: 125,00 EUR</span>
                </div>
                <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"></circle>
                    <polygon
                      points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"
                    ></polygon>
                  </svg>
                </button>
              </div>
              <div class="narrator-item">
                <div class="narrator-item__avatar">
                  <img src="@/assets/img/icons/icon-male-narrator.svg" alt>
                </div>
                <div class="narrator-item__content">
                  <h4 class="narrator-name">Narrator name</h4>
                  <span class="narrator-genre">Most read genre: Crime</span>
                  <span class="narrator-narrations">Narrations: 65</span>
                  <span class="narrator-price">Price: 125,00 EUR</span>
                </div>
                <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"></circle>
                    <polygon
                      points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"
                    ></polygon>
                  </svg>
                </button>
              </div>
              <div class="narrator-item">
                <div class="narrator-item__avatar">
                  <img src="@/assets/img/icons/icon-female-narrator.svg" alt>
                </div>
                <div class="narrator-item__content">
                  <h4 class="narrator-name">Narrator name</h4>
                  <span class="narrator-genre">Most read genre: Crime</span>
                  <span class="narrator-narrations">Narrations: 65</span>
                  <span class="narrator-price">Price: 125,00 EUR</span>
                </div>
                <button class="narrator-item__preview">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278">
                    <circle cx="139" cy="139" r="139"></circle>
                    <polygon
                      points="121.88 81.25 121.88 141.25 121.88 201.25 196.88 141.25 121.88 81.25"
                    ></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Dropdown from "~/components/dropdown.vue";
import InputField from "~/components/input-field.vue";
import SwannAPI from "~/plugins/SwannAPI.js";

export default {
  asyncData() {
    return Promise.all([SwannAPI.getNarrators()])
      .then(([narrators]) => {
        return {
          narrators: narrators.data
        };
      })
      .catch(console.error);
  },
  data() {
    return {
      voicetypeOptions: [
        {
          text: "Feminine",
          value: "feminine"
        },
        {
          text: "Masculine",
          value: "masculine"
        },
        {
          text: "Youthful",
          value: "youthful"
        },
        {
          text: "Mature",
          value: "mature"
        }
      ],
      locationOptions: [
        {
          text: "Denmark",
          value: "denmark"
        },
        {
          text: "Etc.",
          value: "etc"
        }
      ]
    };
  },
  components: {
    Dropdown,
    InputField
  }
};
</script>
