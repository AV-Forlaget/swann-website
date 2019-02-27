<template>
    <div class="voice-samples__block">
        <button v-if="removable" @click="$emit('remove')" class="remove-sample-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.8 23.8"><path d="M23.8,2.8,21,0,11.9,9.1,2.8,0,0,2.8l9.1,9.1L0,21l2.8,2.8,9.1-9.1L21,23.8,23.8,21l-9.1-9.1Z"/></svg></button>
        <dropdown placeholder="Choose language" :options="langOptions" v-model="language"></dropdown>
        <div class="file-upload">
            <p v-if="data">{{ data.name }}</p>
            <input type="file" :id="idname" class="file-upload__input" accept="audio/mp3" @change="setFile"/>
            <label :for="idname" class="file-upload__label">Upload voicesample</label>
        </div>
    </div>
</template>

<script>
import Dropdown from '~/components/dropdown.vue';

export default {
    props: {
        value: {type: Object, default() {return {
            language: 'ar',
            data: null
        }}},
        uid: {type: Number, default: 0},
        removable: {type: Boolean, default: true}
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
                text: 'Czech',
                value: 'cs'
                },
                {
                text: 'Croatian',
                value: 'hr'
                },
                {
                text: 'Danish',
                value: 'da'
                },
                {
                text: 'Dutch',
                value: 'nl'
                },
                {
                text: 'English',
                value: 'en'
                },
                {
                text: 'Estonian',
                value: 'et'
                },
                {
                text: 'Farsi',
                value: 'fa'
                },
                {
                text: 'Finnish',
                value: 'fi'
                },
                {
                text: 'French',
                value: 'fr'
                },
                {
                text: 'German',
                value: 'de'
                },
                {
                text: 'Greek',
                value: 'el'
                },
                {
                text: 'Hindi',
                value: 'hi'
                },
                {
                text: 'Hungarian',
                value: 'hu'
                },
                {
                text: 'Icelandic',
                value: 'is'
                },
                {
                text: 'Italian',
                value: 'it'
                },
                {
                text: 'Japanese',
                value: 'ja'
                },
                {
                text: 'Latvian',
                value: 'lv'
                },
                {
                text: 'Lithuanian',
                value: 'lt'
                },
                {
                text: 'Mandarin',
                value: 'zh'
                },
                {
                text: 'Norwegian',
                value: 'no'
                },
                {
                text: 'Polish',
                value: 'pl'
                },
                {
                text: 'Portuguese',
                value: 'pt'
                },
                {
                text: 'Punjabi',
                value: 'pa'
                },
                {
                text: 'Romanian',
                value: 'ro'
                },
                {
                text: 'Russian',
                value: 'ru'
                },
                {
                text: 'Serbian',
                value: 'sr'
                },
                {
                text: 'Spanish',
                value: 'es'
                },
                {
                text: 'Swedish',
                value: 'sv'
                },
                {
                text: 'Turkish',
                value: 'tr'
                },
                {
                text: 'Ukrainian',
                value: 'uk'
                },
                {
                text: 'Vietnamese',
                value: 'vi'
                }
            ],
            language: 'ar',
            data: null
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
            this.onChange();
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
        },
        setFile(evt) {
            let files = evt.srcElement.files;
            if(files[0]) {
                this.data = files[0];
            }
        }
    },
    computed: {
        idname() {
            return 'voicesample_' + this.uid;
        }
    },
    components: {
        Dropdown
    }
}
</script>
