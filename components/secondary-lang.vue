<template>
    <div class="voice-samples__block">
        <button v-if="removable" @click="$emit('remove')" class="remove-sample-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.8 23.8"><path d="M23.8,2.8,21,0,11.9,9.1,2.8,0,0,2.8l9.1,9.1L0,21l2.8,2.8,9.1-9.1L21,23.8,23.8,21l-9.1-9.1Z"/></svg></button>
        <dropdown placeholder="Choose language" :options="languageOptions" v-model="language" :search="true"></dropdown>
        <dropdown placeholder="Choose proficiency" :options="proficiencyOptions" v-model="proficiency"></dropdown>
    </div>
</template>

<script>
import Dropdown from '~/components/dropdown.vue';
import Langs from '~/assets/lang.json';

export default {
    props: {
        value: {type: Object, default() {return {
            language: '',
            proficiency: 1
        }}},
        uid: {type: Number, default: 0},
        removable: {type: Boolean, default: true}
    },
    
    data() {
        return {
            language: '',
            proficiency: 1,
            languageOptions: Langs,
            proficiencyOptions: [
                {
                    value: 1,
                    text: 'Basic'
                },
                {
                    value: 2,
                    text: 'Independent'
                },
                {
                    value: 3,
                    text: 'Proficient'
                }
            ],
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
        proficiency() {
            this.onChange();
        }
    },
    methods: {
        optionSelected(evt) {
            this.language = evt.code;
        },
        updateIntVal() {
            this.language = this.value.language;
            this.proficiency = this.value.proficiency;
        },
        onChange() {
            this.$emit('input', {
                language: this.language,
                proficiency: this.proficiency
            })
        }
    },
    computed: {
        idname() {
            return 'secondarylang_' + this.uid;
        }
    },
    components: {
        Dropdown
    }
}
</script>
