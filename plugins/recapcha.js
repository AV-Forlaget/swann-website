import { VueReCaptcha } from 'vue-recaptcha-v3';
import Vue from 'vue';

Vue.use(VueReCaptcha, { siteKey: process.env.RECAPCHA_SITE_KEY })