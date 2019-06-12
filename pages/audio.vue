<template>
  <section class="main-content">
    <div class="main-hero">
      <div class="main-hero__wrapper">
        <h1 class="main-hero__heading">Audio</h1>
      </div>
      <div class="spectrum">
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
        <div class="spectrum__bar"></div>
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
      </div>
    </div>
    <div class="content-section content-section--bg-color">
      <div class="content-section__wrapper">
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
    <div class="content-section content-section--white" id="narratorSection">
      <div class="content-section__wrapper">
        <h2 class="content-section__heading content-section__heading--center">Our worldwide narrator catalogue</h2>
        <p class="content-section__text content-section__text--center">Swann Studio has an extensive ever growing global catalogue of voices. Our audio editors are always ready to assist our clients in choosing the right narrator for any job. We believe that narrating and listening is intimate and requires a great deal of sensibility and always aim to understand and learn more about the nuances of storytelling traditions in different markets and cultures.</p>
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
    <div class="content-section content-section--dark">
        <div class="content-section__wrapper">
          <div class="text-block text-block--dark">
            <h3 class="text-block__heading">Other audio production services</h3>
            <p class="text-block__paragraph">In addition to the audiobook services Swann Studio provides podcast production assistance and article narrations for online journals, magazines, newspapers etc. We also have a team ready to help you digitize and optimize your backlist of titles on cassettes or reel tapes.</p>
            <p class="text-block__paragraph">If you are interested in our services, please contact our audio production team.</p>
            <div class="content-section__btn">
              <nuxt-link class="btn" to="/about-us">Contact information</nuxt-link>
            </div>
            <div class="icon-list">
              <div class="icon-list__item">
                <img src="@/assets/img/icons/icon-podcast.svg" class="icon-list__icon icon-list__item--small" alt="" />
                <h4>Podcast</h4>
                <p>We offer both practical and editorial assistance with podcast productions. Our team can also help you distribute your content.</p>
              </div>
              <div class="icon-list__item">
                <img src="@/assets/img/icons/icon-digitization.svg" class="icon-list__icon icon-list__item--small" alt="" />
                <h4>Digitization</h4>
                <p>We can digitize audio on cassettes or reel tapes, clean the sound and handle the distribution for example to help you revitalize your backlist.</p>
              </div>
              <div class="icon-list__item">
                <img src="@/assets/img/icons/icon-digitization.svg" class="icon-list__icon" alt="" />
                <h4>Articles</h4>
                <p>Swann Studio provides narration for all kinds of online publications, ranging from science journals, through fashion magazines to weekly or daily newspapers.</p>
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
