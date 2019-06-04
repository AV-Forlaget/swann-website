<template>
    <div class="intro-slide" :style="{'background-image': bgImg}">
        <div class="intro-slide__content">
            <h2 class="slide-heading" v-text="content.header"></h2>
            <p class="slide-text" v-text="content.text"></p>
            <nuxt-link :to="content.link.href" v-text="content.link.text"></nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {type: Object, default() {return { }}}
    },
    computed: {
        bgImg() {
            return (this.content.image) ? 'url(' + this.content.image + ')' : '';
        }
    }
}
</script>

