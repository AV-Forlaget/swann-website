<template>
  <div class="main-app">
    <div id="fb-root"></div>
    <div class="main-header">
      <div class="main-header__wrapper">
        <nuxt-link to="/" class="main-logo"><img src="@/assets/img/kluboplevelser-logo.svg" alt=""></nuxt-link>
        <ul class="nav-list">
            <li class="nav-list__item">
              <nuxt-link to="/">Forside</nuxt-link>
            </li>
            <li class="nav-list__item">
              <nuxt-link to="/oplevelser">Oplevelser</nuxt-link>
            </li>
              <li class="nav-list__item">
                <nuxt-link to="/vision">Vision</nuxt-link>
            </li>
              <li class="nav-list__item">
                <nuxt-link to="/kontakt">Kontakt</nuxt-link>
            </li>
        </ul>
        <button class="btn btn--orange">
          <span>Log ind</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134.9 159.8"><path d="M130.9,155.8s-17.5-49.4-63.4-49.4S4,155.8,4,155.8" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:8px"/><ellipse cx="67.5" cy="47.4" rx="37.6" ry="43.4" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:8px"/></svg>
        </button>
         <div class="mobile-menu">
                <div class="mobile-menu__hamburger">
                    <span class="mobile-menu__hamburger__bar mobile-menu__hamburger__bar--top"></span>
                    <span class="mobile-menu__hamburger__bar mobile-menu__hamburger__bar--middle"></span>
                    <span class="mobile-menu__hamburger__bar mobile-menu__hamburger__bar--bottom"></span>
                </div>
            </div>
      </div>
    </div>

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
