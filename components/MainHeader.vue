<template>
    <div class="main-header">
      <div class="main-header__wrapper">
        <img src="@/assets/img/swann-logo.svg" alt="">
        <h2>Narrator application</h2>
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
