<template>
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
        <nuxt-link to="/login" class="btn btn--orange">
            <span>Log ind</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134.9 159.8"><path d="M130.9,155.8s-17.5-49.4-63.4-49.4S4,155.8,4,155.8" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:8px"/><ellipse cx="67.5" cy="47.4" rx="37.6" ry="43.4" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:8px"/></svg>
        </nuxt-link>
         <div class="mobile-menu" @click="open = !open">
                <div class="mobile-menu__hamburger">
                    <span class="mobile-menu__hamburger__bar mobile-menu__hamburger__bar--top"></span>
                    <span class="mobile-menu__hamburger__bar mobile-menu__hamburger__bar--middle"></span>
                    <span class="mobile-menu__hamburger__bar mobile-menu__hamburger__bar--bottom"></span>
                </div>
            </div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            open: false
        }
    },
    watch: {
        '$route'() {
            this.open = false;
        },
        open() {
            if(this.open) {
                document.getElementsByTagName('body')[0].classList.add('showMenu');
            } else {
                document.getElementsByTagName('body')[0].classList.remove('showMenu');
            }
        }
    }
}
</script>
