<template>
       <div class="search-selector">
            <div class="search-selector__field" @click="openSelector">
                <span v-text="selectedValueTxt"></span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 395.65 223" class="icon-dropdown"><path d="M370.5,0a25,25,0,0,0-17.79,7.37L210.57,149.51l-12.73,12.73-12.73-12.73L43,7.37A25.16,25.16,0,1,0,7.38,43L180,215.63a25.16,25.16,0,0,0,35.58,0L388.29,43A25.17,25.17,0,0,0,370.5,0Z"/></svg>
            </div>
            <div class="search-selector--options" v-if="open">
                <ul>
                   <li v-for="option in options" 
                        :key="(option.value) ? option.value : option"
                        v-text="(option.text) ? option.text : option"
                        :class="{'selected': option == selectedValue}"
                        @click="selectOption(option)"
                        ></li>
                </ul>
            </div>
        </div>
</template>

<script>

export default {
    props: {
        name: {type: String, default: null},
        value: '',
        options: {type: Array, default() { return [ ]}},
        placeholder: {type: String, default: ''}
    },
    data() {
        return {
            open: false,
        }
    },
    beforeDestroy() {
        if(this.open) {
            window.removeEventListener('click', this.windowListener);
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('input', (option.value) ? option.value : option);
            this.closeSelector();
        },
        closeSelector() {
            this.open = false;
            window.removeEventListener('click', this.windowListener);
        },
        openSelector() {
            if(this.open) {
                this.closeSelector();
                return;
            }

            this.open = true;
            window.addEventListener('click', this.windowListener);
        },
        windowListener(evt) {
            this.$nextTick(() => {
                if(this.$el && !this.$el.contains(evt.target) && this.open) {
                    this.closeSelector();
                }
            })
        }
    },
    computed: {
        selectedValue() {
            let option = this.options.filter((item) => {
                return (this.value == (item.value || item));
            });

            if(option.length) {
                return option[0];
            }

            return this.placeholder;
        },
        selectedValueTxt() {
            if(this.selectedValue) {
                return this.selectedValue.text || this.selectedValue;
            }

            return this.placeholder;
        }
    }
}
</script>