<template>
    <transition>
        <div class="modal-view">
            <div class="modal-view__header" @click="close()">
                <div class="modal-view__header__icon">
                    <slot name="icon"></slot>
                </div>
                <h2 class="modal-view__header__text" v-text="title"></h2>
                <button class="modal-view__header__btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.15 27.15"><path d="M16.26,13.57,26.59,3.24A1.9,1.9,0,0,0,23.9.56L13.57,10.89,3.24.56A1.88,1.88,0,0,0,.56.56a1.88,1.88,0,0,0,0,2.68L10.89,13.57.56,23.9a1.9,1.9,0,1,0,2.68,2.69L13.57,16.26,23.9,26.59a1.93,1.93,0,0,0,1.35.56,1.91,1.91,0,0,0,1.34-3.25Z"/></svg>
                </button>
            </div>
            <div class="modal-view__content">
                <div class="modal-view__content__wrapper">
                    <slot></slot>
                </div>
            </div>
            <slot name="footer"></slot>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        title: '',
        closeOnClick: {type: Boolean, default: false},
        isOpen: {type: Boolean, default: false},
        noScroll: {type: Boolean, default: false}
    },
    data() {
        return {
            eventListenerAdded: false
        }
    },
    mounted() {
        this.addEventListener();
    },
    watch: {
        isOpen() {
            this.addEventListener();
            this.addNoscroll();
        }
    },
    beforeDestroy() {
        if(this.closeOnClick) {
            console.log('Remove eventlister using close on click');
            window.removeEventListener('click', this.onClick);
        }

        if(this.noScroll) {
            this.removeNoScroll();
        }
    },
    methods: {
        addNoscroll() {
            if(this.noScroll) {
                document.getElementsByTagName('body')[0].classList.add('noScroll');
            }
        },
        removeNoScroll() {
            document.getElementsByTagName('body')[0].classList.remove('noScroll');
        },
        addEventListener() {
            setTimeout(() => {
                if(this.closeOnClick && this.isOpen && !this.eventListenerAdded) {
                    console.log('Add eventlister');
                    this.eventListenerAdded = true;
                    window.addEventListener('click', this.onClick);
                }
            }, 150);
        },
        onClick(evt) {
            this.$nextTick(() => {
                if(this.$el && !this.$el.contains(evt.target) && this.isOpen) {
                    console.log('Closed by click', evt);
                    this.$emit('close', evt);
                }
            })
        },
        close() {
            this.$emit('close')
        }
    }
}
</script>
