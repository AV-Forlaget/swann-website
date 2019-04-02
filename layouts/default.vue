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
								<nuxt-link class="nav__item__anchor" to="/countries">Countries</nuxt-link>
							</li>
						</ul>
					</div>
					<div class="main-nav__list main-nav__list--right">
						<p class="header-tagline">Be part of our 1 catalog</p>
						<ul class="nav nav--login-menu">
							<li class="nav__item">
								<nuxt-link class="nav__item__anchor" to="/login">Login</nuxt-link>
							</li>
							<li class="nav__item">
								<nuxt-link class="nav__item__anchor" to="/sign-up">Sign up</nuxt-link>
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

  	<div class="footer">
  		<img src="@/assets/img/swann-logo-white.svg" class="footer__logo" alt="Swann Studio" style="display: none;"/>
			<div class="footer-nav"></div>
  		<ul class="nav nav--footer">
  			<li class="nav__item">
  				<nuxt-link class="nav__item__anchor" to="/about-us">About us</nuxt-link>
  			</li>
  			<li class="nav__item">
  				<nuxt-link class="nav__item__anchor" to="/language">Language</nuxt-link>
  			</li>
  			<li class="nav__item">
  				<nuxt-link class="nav__item__anchor" to="/login">Login</nuxt-link>
  			</li>
  			<li class="nav__item">
  				<nuxt-link class="nav__item__anchor" to="/sign-up">Sign up</nuxt-link>
  			</li>
  			<li class="nav__item">
  				<nuxt-link class="nav__item__anchor" to="/trouble">Trouble? Contact us here ...</nuxt-link>
  			</li>
  		</ul>
  		<div class="footer-some">
  			<a href="#" class="footer-some__anchor" title="Visit Facebook">
  				<img src="#" class="footer-some__icon footer-icon__facebook" alt="Visit Facebook" />
  			</a>
  			<a href="#" class="footer-some__anchor" title="Visit Instagram">
  				<img src="#" class="footer-some__icon footer-icon__instagram" alt="Visit Instagram" />
  			</a>
  		</div>
  		<p class="footer__copyright">© 2019 Swann A/S - All rights reserved</p>
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