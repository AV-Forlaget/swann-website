<template>
  <div class="main-app">
    <div id="fb-root"></div>
    <main-header></main-header>

    <nuxt/>

    <div class="main-footer">
      <div class="main-footer__wrapper">
        <div class="footer-col">
          <h4>Virksomhed</h4>
          <ul>
            <li>Kluboplevelser.dk APS <span>Rugårdsvej 253, 5210 Odense NV</span></li>
            <li>CVR. 39690330</li>
            <li>Telefon: <a href="tel:004521459850">(45) 2145 9850</a></li>
            <li>E-mail: <a href="mailto:info@kluboplevelser.dk">info@kluboplevelser.dk</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Information</h4>
          <ul>
            <li><a href="#">Privatlivspolitik</a></li>
            <li><a href="#">Forretningsbetingelser</a></li>
            <li><a href="#">Lovgrundlag</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Sociale medier</h4>
          <div class="social-media-links">
            <a href="https://www.facebook.com/kluboplevelser.dk">
              <img src="@/assets/img/icon-facebook.svg" alt="Kluboplevelser.dk Facebook">
            </a>
            <a href="https://www.instagram.com/kluboplevelser.dk">
              <img src="@/assets/img/icon-instagram.svg" alt="Kluboplevelser.dk Instagram">
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader.vue';
export default {
  components: {
    MainHeader
  }
}
</script>

