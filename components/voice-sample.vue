<template>
    <div class="voice-samples__block">
        <button @click="$emit('remove')" class="remove-sample-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.8 23.8"><path d="M23.8,2.8,21,0,11.9,9.1,2.8,0,0,2.8l9.1,9.1L0,21l2.8,2.8,9.1-9.1L21,23.8,23.8,21l-9.1-9.1Z"/></svg></button>
        <dropdown placeholder="Choose language" :options="langOptions" v-model="language"></dropdown>
        <div class="file-upload">
            <input type="file" name="file" id="voicesample" class="file-upload__input"/>
            <label for="voicesample" class="file-upload__label">Upload voicesample</label>
        </div>
    </div>
</template>

<script>
import Dropdown from '~/components/dropdown.vue';

export default {
    props: {
        value: {type: Object, default() {return {
            language: 'ar',
            data: ''
        }}}
    },
    data() {
        return {
            langOptions: [
                {
                text: 'Arabic',
                value: 'ar'
                },
                {
                text: 'Bengali',
                value: 'bn'
                },
                {
                text: 'Bulgarian',
                value: 'bg'
                },
                {
                text: 'Danish',
                value: 'da'
                }
            ],
            language: 'ar',
            data: ''
        }
    },
    mounted() {
        this.updateIntVal();
    },
    watch: {
        value: {
            handler() {
                this.updateIntVal()
            },
            deep: true
        },
        language() {
            this.onChange();
        },
        data() {
            this.omChange();
        }
    },
    methods: {
        updateIntVal() {
            this.language = this.value.language;
            this.data = this.value.data;
        },
        onChange() {
            this.$emit('input', {
                language: this.language,
                data: this.data
            })
        }
    },
    components: {
        Dropdown
    }
}
</script>
