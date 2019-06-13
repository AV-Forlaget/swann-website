<template>
    <div class="narrator-item">
        <div class="narrator-item__avatar">
            <img :src="icon" alt>
        </div>
        <div class="narrator-item__content">
            <h4 class="narrator-name" v-text="narrator.name"></h4>
        </div>
        <button class="narrator-item__preview" :class="{'narrator-item__preview--pause': playing, 'narrator-item__preview--loading': loading}">
            <span class="preview-bar preview-bar--first"></span>
            <span class="preview-bar preview-bar--second"></span>
        </button>
    </div>    
</template>

<script>
export default {
    props: {
        narrator: {type: Object, default() {return { }}}
    },
    data() {
        return {
            playing: false,
            loading: false
        }
    },
    computed: {
        icon() {
            return (this.narrator.voice.gender == 'male') ? require('@/assets/img/icons/icon-male-narrator.svg') : require('@/assets/img/icons/icon-female-narrator.svg');
        }
    }
}
</script>
