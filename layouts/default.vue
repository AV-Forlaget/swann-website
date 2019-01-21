<template>
  <div class="main-app">
    <div class="main-header">
      <div class="main-header__wrapper">
        <div class="main-logo">
          <img src="@/assets/img/kluboplevelser-logo.svg" alt="">
        </div>
        <ul class="nav-list">
            <li class="nav-list__item current">
                <a href="#">Forisde</a>
            </li>
              <li class="nav-list__item">
                <a href="#">Oplevelser</a>
            </li>
              <li class="nav-list__item">
                <a href="#">Vision</a>
            </li>
              <li class="nav-list__item">
                <a href="#">Kontakt</a>
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
            <li>Telefon: (45) 2145 9850</li>
            <li>E-mail: info@kluboplevelser.dk</li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Information</h4>
          <ul>
            <li>Privatlivspolitik</li>
            <li>Forretningsbetingelser</li>
            <li>Lovgrundlag</li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Sociale medier</h4>
        </div>
      </div>
    </div>
  </div>
</template>
