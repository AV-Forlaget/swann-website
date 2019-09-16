<template>
  <div class="main-app">
	  <div class="main-header">
			<div class="main-header__wrapper">
				<nuxt-link to="/" class="header-logo" title="Go to title page">
					<img src="@/assets/img/swann-logo.svg" class="header-logo__image" alt="Swann Studio" />
				</nuxt-link>
				<div class="main-nav">
					<div class="main-nav__list main-nav__list--left">
						<ul class="nav nav--primary-menu">
							<li class="nav__item">
								<nuxt-link class="nav__item__anchor" to="/audio">Audio</nuxt-link>
							</li>
							<li class="nav__item">
								<nuxt-link class="nav__item__anchor" to="/distribution">Distribution</nuxt-link>
							</li>
							<li class="nav__item">
								<a class="header-tagline" :href="narratorCatalogLink">Be part of our narrator catalogue</a>
							</li>
						</ul>
					</div>
					<div class="main-nav__list main-nav__list--right">
						<ul class="nav nav--login-menu">
							<li class="nav__item">
								<a href="https://swann-studio.com/app/da/login" class="btn">Login</a>
							</li>
						</ul>
					</div>
				</div>	
				<div class="mobile-menu" @click="open = !open">
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
	  			<img src="@/assets/img/swann-logo-white.svg" class="footer-logo" alt="Swann Studio"/>
			</div>
			<div class="footer-col">
				<div class="footer-nav">
					<nuxt-link to="/about-us">About us</nuxt-link>
					<a href="https://swann-studio.com/app/da/login">Login</a>
					<a href="/swannstudio-overview.pdf" target="_blank">Download printable brochure here</a>
					<nuxt-link to="/trouble"></nuxt-link>
				</div>
				<span class="footer-copyright">© 2019 Swann A/S - All rights reserved</span>
			</div>
			<div class="footer-col">
				<a href="https://www.facebook.com/SwannStudio1983" target="_blank" class="footer-some" title="Visit Facebook">
  					<img src="@/assets/img/icons/icon-facebook.svg" alt="Visit Facebook" />
				</a>
				<a href="https://www.instagram.com/swann.studio/" target="_blank" class="footer-some" title="Visit Instagram">
					<img src="@/assets/img/icons/icon-instagram.svg" alt="Visit Instagram" />
				</a>
			</div>
		</div>
  	</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            open: false,
			narratorCatalogLink: process.env.NARRATOR_LINK
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