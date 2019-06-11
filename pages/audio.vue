<template>
  <section class="main-content">
    <div class="main-hero">
      <div class="main-hero__wrapper">
        <h1 class="main-hero__heading">Audio</h1>
      </div>
    </div>
    <div class="content-section content-section--white">
      <div class="content-section__wrapper">
        <h2 class="content-section__heading content-section__heading--center">Audiobook production</h2>
        <p class="content-section__text content-section__text--center">Swann Studio aims to simplify the audio production workflow for our clients as much as possible.</p>
        <p class="content-section__text content-section__text--center">We produce and publish audiobooks and other sound content internationally and on any scale. We are currently expanding into new markets every month, working with big international publishing houses as well as private individual publishers.</p>
        <p class="content-section__text content-section__text--center">If you are interested in our services, please contact our audiobook production team.</p>
        <div class="content-section__btn">
          <nuxt-link class="btn" to="/about-us">Contact information</nuxt-link>
        </div>
        <div class="audio-flow">
          <div class="audio-flow__block audio-flow__block--studio">
            <img src="@/assets/img/swann-studio-app.png" alt="Swann studio app" class="audio-flow__block__img">
            <h4 class="audio-flow__block__heading">Swann studio app</h4>
            <p class="audio-flow__block__text">Upload your manuscript and metadata directly through our web app or API. From here on everything is handled by us with the help of our software that organizes the entire production process.</p>
            <img src="@/assets/img/lines/line-01.svg" alt class="audio-flow__block__line">
          </div>
          <div class="audio-flow__block audio-flow__block--casting">
            <img src="@/assets/img/swann-choose-narrator.jpg" alt class="audio-flow__block__img">
            <h4 class="audio-flow__block__heading">Casting</h4>
            <p class="audio-flow__block__text">You can choose a narrator from our catalogue, request someone from the outside or let our editors assist you or decide for you, based on their experience with thousands of productions in all genres.</p>
            <img src="@/assets/img/lines/line-02.svg" alt class="audio-flow__block__line">
          </div>
          <div class="audio-flow__block audio-flow__block--recording">
            <img src="@/assets/img/icons/icon-recording.png" alt class="audio-flow__block__img">
            <h4 class="audio-flow__block__heading">Recording</h4>
            <p class="audio-flow__block__text">The production can be completed within as little as three weeks after the choice of narrator has been confirmed, and you can follow the progress of your title in the app.</p>
            <img src="@/assets/img/lines/line-03.svg" alt class="audio-flow__block__line">
          </div>
          <div class="audio-flow__block audio-flow__block--delivery">
            <img src="@/assets/img/icons/icon-delivery.png" alt="Delivery" class="audio-flow__block__img">
            <h4 class="audio-flow__block__heading">Delivery</h4>
            <p class="audio-flow__block__text">Our audioserver automatically tags the audio files, divides them into tracks or chapters and converts them into the requested format. We check the metadata and the quality of the recording before delivering in any chosen format.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content-section content-section--bg-color">
      <div class="content-section__wrapper">
        <h2 class="content-section__heading content-section__heading--center">Formats</h2>
        <p class="content-section__text content-section__text--center">[introducion to the various formats]</p>
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
    <div class="content-section content-section--white" id="narratorSection">
      <div class="content-section__wrapper">
        <h2 class="content-section__heading content-section__heading--center">Narration</h2>
        <p class="content-section__text content-section__text--center">[text about narration and stuff, Paramount for the customer/listener and therefore for the publisher. An intimate process, Drives the story forward, A mutual relationship]</p>
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
