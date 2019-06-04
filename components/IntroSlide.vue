<template>
    <div class="intro-slide" :class="['slide-' + content.class]" :style="{'background-image': bgImg}">
        <div class="intro-slide__content">
            <h2 class="slide-heading" v-text="content.header"></h2>
            <p class="slide-text" v-text="content.text"></p>
            <nuxt-link class="btn" :to="content.link.href" v-text="content.link.text"></nuxt-link>
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

