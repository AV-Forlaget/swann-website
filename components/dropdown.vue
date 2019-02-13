<template>
        <div @click="openclose" class="suggestion-list-component input-field" :class="{'open': open}">
            <div class="label-input">
                <input type="text" :placeholder="placeholder" disabled>
                <ul class="suggestion-list">
                    <slot></slot>
                </ul>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 395.65 223" class="icon-dropdown"><path d="M370.5,0a25,25,0,0,0-17.79,7.37L210.57,149.51l-12.73,12.73-12.73-12.73L43,7.37A25.16,25.16,0,1,0,7.38,43L180,215.63a25.16,25.16,0,0,0,35.58,0L388.29,43A25.17,25.17,0,0,0,370.5,0Z"/></svg>
            </div>
        </div>
</template>

<script type="text/javascript">

export default {
        props: {
            placeholder: {type: String, default: null}
        },
        data() {
            return {
                open: false,
            }
        },
        mounted() {
            window.addEventListener('click', this.checkClick.bind(this));
        },
        beforeDestroy() {
            window.removeEventListener('click', this.checkClick.bind(this));
        },
        methods: {
            checkClick(evt) {
                if(this.open && !this.$el.contains(evt.target)) {
                    this.open = false;
                }
            },
            openclose() {
                this.open = !this.open
            },
            outside() {
                this.open = false;
            }
        }
};
</script>