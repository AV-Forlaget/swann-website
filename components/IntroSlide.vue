<template>
    <div class="intro-slide">
        <div class="intro-slide__content">
            <h2 class="slide-heading" :class="['slide-heading--' + content.type]" v-text="content.header"></h2>
            <p class="slide-text" v-text="content.text"></p>
        </div>
        <div class="intro-slide__image">
            <img :src="this.content.image" alt="" class="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {type: Object, default() {return { }}}
    }
}
</script>

