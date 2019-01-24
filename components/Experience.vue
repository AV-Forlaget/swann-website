<template>
    <div class="grid-item">
        <div class="grid-item__header" :style="{'background-image': this.backgroundImage}"></div>
        <div class="grid-item__body">
            <h3 class="grid-item__title" v-text="content.header"></h3>
            <p v-text="content.text"></p>
            <a v-if="content.link" :href="content.link" class="btn" target="_blank">Gå til tilbud</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {type: Object, defualt() {return { }}}
    },
    computed: {
        backgroundImage() {
            return (this.content.image) ? 'url(' + this.content.image.fields.file.url + '?w=600)' : false;
        }
    }
}
</script>

