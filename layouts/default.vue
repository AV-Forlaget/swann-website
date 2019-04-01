<template>
  <div class="main-app">
	  <div class="header">
      <div class="header_item header__left">
  	  	<a href="#" class="header-logo__anchor" title="Go to title page">
  	  		<img src="#" class="header-logo__image" alt="Swann Studio" />
  	  	</a>
  	  	<ul class="nav primary-menu">
  	  		<li class="nav__item primary-menu__item">
  	  			<a class="nav__anchor primary-menu__anchor" href="#">Audio</a>
  	  		</li>
  	  		<li class="nav__item primary-menu__item">
  	  			<a class="nav__anchor primary-menu__anchor" href="#">Distribution</a>
  	  		</li>
  	  		<li class="nav__item primary-menu__item">
  	  			<a class="nav__anchor primary-menu__anchor" href="#">Countries</a>
  	  		</li>
  	  	</ul>
      </div>
      <div class="header_item header__right">
  	  	<p class="header__tagline">Be part of our narrator catalog</p>
  	  	<ul class="nav login-menu">
  	  		<li class="nav__item login-menu__item">
  	  			<a class="nav__anchor login-menu__anchor" href="#">Login</a>
  	  		</li>
  	  		<li class="nav__item login-menu__item">
  	  			<a class="nav__anchor login-menu__anchor" href="#">Sign up</a>
  	  		</li>
  	  	</ul>
      </div>
    </div>

    <nuxt/>

  	<div class="footer">
  		<img src="#" class="footer__logo" alt="Swann Studio" />
  		<ul class="nav footer-menu">
  			<li class="nav__item footer-menu__item">
  				<a class="nav__anchor footer-menu__anchor" href="#"></a>
  			</li>
  			<li class="nav__item footer-menu__item">
  				<a class="nav__anchor footer-menu__anchor" href="#"></a>
  			</li>
  			<li class="nav__item footer-menu__item">
  				<a class="nav__anchor footer-menu__anchor" href="#"></a>
  			</li>
  			<li class="nav__item footer-menu__item">
  				<a class="nav__anchor footer-menu__anchor" href="#"></a>
  			</li>
  			<li class="nav__item footer-menu__item">
  				<a class="nav__anchor footer-menu__anchor" href="#"></a>
  			</li>
  		</ul>
  		<div class="footer-some">
  			<a href="#" class="footer-some__anchor" title="Visit Facebook">
  				<img src="@/assets/img/swann-logo-icon.svg" class="footer-some__icon footer-icon__facebook" alt="Visit Facebook" />
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
/*
export default {
  mounted() {
    this.$recaptchaLoaded().then(() => {
      this.$recaptcha('homepage').then((token) => {
        this.$store.commit('token', token);
      })
    });

    this.$nextTick(() => {
      if(!this.$store.state.started) {
        this.$router.push({
          path: '/'
        })
      }
    });

  },
  methods: {
    close() {
      window.location = process.env.CLOSE_URL;
    }
  },
  computed: {
    percent() {
      return (this.$store.state.step / 4) * 100
    },
    currentStep() {
      return this.$store.state.step;
    }
  }
}
*/
</script>
