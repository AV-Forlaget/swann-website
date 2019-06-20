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
        <div class="content-section__btn content-section__btn--center">
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
            <p class="audio-flow__block__text">Upload your manuscript and metadata directly through our web app or API. From here on everything is handled by us with the help of our software that organises the entire production process.</p>
          </div>
          <div class="audio-flow__block audio-flow__block--casting">
            <img src="@/assets/img/swann-choose-narrator.jpg" alt class="audio-flow__block__img">
            <h4 class="audio-flow__block__heading">Casting</h4>
            <p class="audio-flow__block__text">You can choose a narrator from our catalogue, request someone from the outside or let our editors assist you or decide for you, based on their experience with thousands of productions in all genres.</p>
          </div>
          <div class="audio-flow__block audio-flow__block--recording">
            <img src="@/assets/img/icons/icon-recording.png" alt class="audio-flow__block__img">
            <h4 class="audio-flow__block__heading">Recording</h4>
            <p class="audio-flow__block__text">The production can be completed within as little as three weeks after the choice of narrator has been confirmed, and you can follow the progress of your title in the app.</p>
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
              <dropdown :options="voicetypeOptions" v-model="selectedVoiceFilter"></dropdown>
              <dropdown :options="locationOptions" v-model="selectedLocationFilter"></dropdown>
              <input-field name="Search" v-model="searchFilter"></input-field>
            </div>
            <div class="narrator-grid">
              <narrator-item v-for="narrator in filteredNarratorList" :key="narrator.id" :narrator="narrator" @playaudio="(id) => playingNarratorId = id" :playingAudioId="playingNarratorId"></narrator-item>
            </div>
      </div>
    </div>
    <div class="content-section content-section--dark">
        <div class="content-section__wrapper">
          <div class="text-block text-block--dark">
            <h3 class="text-block__heading">Other audio production services</h3>
            <p class="text-block__paragraph">In addition to the audiobook services Swann Studio provides podcast production assistance and article narrations for online journals, magazines, newspapers etc. We also have a team ready to help you digitise and optimise your backlist of titles on cassettes or reel tapes.</p>
            <p class="text-block__paragraph">If you are interested in our services, please contact our audio production team.</p>
            <div class="content-section__btn content-section__btn--center">
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
                <h4>Digitisation</h4>
                <p>We can digitise audio on cassettes or reel tapes, clean the sound and handle the distribution for example to help you revitalise your backlist.</p>
              </div>
              <div class="icon-list__item">
                <img src="@/assets/img/icons/icon-articles.svg" class="icon-list__icon" alt="" style="max-width: 8em;"/>
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
import Languages from '~/assets/lang.json';
import NarratorItem from '~/components/narrator-item.vue';
import _ from 'underscore';

export default {
  asyncData() {
    return Promise.all([SwannAPI.getNarrators()])
      .then(([narrators]) => {
        return {
          narrators: _.sortBy(narrators.data, 'name')
        };
      })
      .catch(console.error);
  },
  data() {
      return {
        selectedVoiceFilter: ' ',
        selectedLocationFilter: ' ',
        searchFilter: '',
        playingNarratorId: ''
      }
  },
  computed: {
    filteredNarratorList() {
      return this.narrators.filter((narrator) => {
        if(this.searchFilter) {
          let regex = new RegExp('^' + this.searchFilter.trim() + '+', 'i');
          if(!narrator.name.match(regex)) {
            return false;
          }
        }

        if(this.selectedLocationFilter != ' ' && narrator.language !== this.selectedLocationFilter) {
          return false;
        }

        if(this.selectedVoiceFilter != ' ' && narrator.voice.gender !== this.selectedVoiceFilter) {
          return false;
        }

        return true;
      });
    },
    locationOptions() {
      let narratorLanguages = _.uniq(this.narrators.map((narrator) => narrator.language));
      let locations = _.sortBy(narratorLanguages.map((langaugeCode) => {
        let lang = Languages.filter((lang) => lang.value === langaugeCode);
        if(lang.length) {
          return {
            text: lang[0].text,
            subline: (lang[0].studios) ? '<b>Studios:</b> ' + lang[0].studios.join(', ') : null,
            value: lang[0].value
          }
        }

        return null;
      }).filter((lang) => lang), 'text');

      locations.unshift({
        text: '(All locations)',
        value: ' '
      });

      return locations;
    },
    voicetypeOptions() {
      let narratorVoices = _.uniq(this.narrators.map((narrator) => narrator.voice.gender)).filter((voice) => voice);
      let voiceTypes = _.sortBy(narratorVoices.map((voice) => {
        let text = voice;
        switch(voice) {
          case 'female':
            text = 'Feminine';
            break;
          case "male":
            text = 'Masculine';
            break;
        }
        
        return {
          text,
          value: voice
        }
      }), 'text');

      voiceTypes.unshift({
        text: '(All voice types)',
        value: ' '
      });

      return voiceTypes;
    }
  },
  components: {
    Dropdown,
    InputField,
    NarratorItem
  }
};
</script>
