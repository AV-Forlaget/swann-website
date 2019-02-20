import { VueReCaptcha } from 'vue-recaptcha-v3';
import Vue from 'vue';

console.log(process.env.RECAPCHA_SITE_KEY);
Vue.use(VueReCaptcha, { siteKey: process.env.RECAPCHA_SITE_KEY })