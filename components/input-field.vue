<template>
    <div class="label-input" v-bind:class="{ 'error-shake': error}">
        <input v-if="inputType == 'text'" ref="inputField" class="input input-field" :placeholder="placeholder" v-bind:class="{ 'has-text': hasText }" type="text" autocomplete="off" v-bind:name="fieldkey" :value="value" v-on:input="onInput" :disabled="disable" v-ui-mask="{'mask': mask}" @keydown.enter="onEnter" @click="onClick" @keydown="onKey" @blur="$emit('blur')" @focus="$emit('focus')">
        <input v-if="inputType == 'email'" ref="inputField" class="input input-field" :placeholder="placeholder" v-bind:class="{ 'has-text': hasText }" type="email" autocomplete="off" v-bind:name="fieldkey" :value="value" v-on:input="onInput" :disabled="disable" v-ui-mask="{'mask': mask}" @keydown.enter="onEnter" @click="onClick" @keydown="onKey" @blur="$emit('blur')" @focus="$emit('focus')">
        <input v-if="inputType == 'password'" ref="inputField" class="input input-field" :placeholder="placeholder" v-bind:class="{ 'has-text': hasText }" type="password" autocomplete="off" v-bind:name="fieldkey" :value="value" v-on:input="onInput" :disabled="disable" v-ui-mask="{'mask': mask}" @keydown.enter="onEnter" @click="onClick" @keydown="onKey" @blur="$emit('blur')" @focus="$emit('focus')">
        <input v-if="inputType == 'tel'" ref="inputField" class="input input-field" :placeholder="placeholder" v-bind:class="{ 'has-text': hasText }" type="tel" autocomplete="off" v-bind:name="fieldkey" :value="value" @blur="$emit('blur')" @focus="$emit('focus')" v-on:input="onInput" :disabled="disable" v-ui-mask="{'mask': mask}" @keydown.enter="onEnter" @click="onClick" @keydown="onKey">
        <textarea v-if="inputType == 'textarea'" ref="inputField" class="input input-field" :placeholder="placeholder" v-bind:class="{ 'has-text': hasText }" type="tel" autocomplete="off" v-bind:name="fieldkey" v-on:input="onInput" :disabled="disable" v-ui-mask="{'mask': mask}" @keydown.enter="onEnter" @click="onClick" @keydown="onKey" @blur="$emit('blur')" @focus="$emit('focus')">{{ value }}</textarea>
        <label class="label" v-if="showLabel">{{ name }}</label>
        <div v-if="error">
            <span class="tag-label">{{ errormsg }}</span>
        </div>
    </div>
</template>

<script>

    export default{
        props: {
            'name': {type: String, default: ''},
            'fieldkey': {type: String, default: ''},
            'value': {type: String, default: ''},
            'error': '',
            'inputType': {type: String, default: 'text'},
            'disable': {type: Boolean, default: false},
            'mask': {type: String, default: null},
            'select': {type: Boolean, default: false},
            placeholder: {type: String, defualt: null},
            showLabel: {type: Boolean, default: true}
        },
        mounted() {
            if(this.select) {
                this.$on('focus', () => {
                    this.$nextTick(() => {
                        this.$refs.inputField.select();  
                    });
                });
            }
        },
        data() {
            return {
                stopTypingTimer: null,
            }
        },
        methods:  {
            selectInput() {
                  this.$refs.inputField.focus()
            },
            onClick() {
              this.$emit('pick')
            },
            
            onEnter(event) {
                this.$emit('enter', event.target.value)
            },

            onInput(event) {
                this.$emit('input', event.target.value)

                if (this.stopTypingTimer) {
                    clearTimeout(this.stopTypingTimer)
                }

                this.stopTypingTimer = setTimeout(() => {
                    this.$emit('stopTyping', event.target.value)
                }, 500)
            },

            onKey(event) {
                this.$emit('key', event)
            }
        },

        computed: {
            hasText() {
                return  (this.value && this.value.length > 0)
            },

            errormsg: function() {
                return (typeof this.error === 'object') ? this.error[0] : this.error
            }
        }
    }
</script>