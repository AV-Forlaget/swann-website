<template>
        <div @click="openclose" class="suggestion-list-component input-field" :class="{'open': open}">
            <div class="label-input">
                <input type="text" :placeholder="placeholder" disabled>
                <ul class="suggestion-list">
                    <slot></slot>
                </ul>
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