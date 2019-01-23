<template>
    <div class="faq-item" :class="{'faq-item--open': open}">
        <div class="faq-item__header" @click="$emit('click')">
            <h3 v-text="content.header"></h3>
            <img src="@/assets/img/icon-faq.svg">
        </div>
        <div class="faq-item__body">
            <p v-text="content.text"></p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {type: Object, defaut() {return { }}},
        open: {type: Boolean, default: false}
    }
}
</script>
