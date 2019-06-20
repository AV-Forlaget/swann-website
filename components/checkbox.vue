<template>
    <div class="label-checkbox" :class="{ 'error': error}">
        <input type="checkbox" :id="uniqueId" :checked="value" value="1" @change="onChange" />
        <label :for="uniqueId" class="label">
            <span class="label-checkbox__circle"></span>
            <span class="label-checkbox__check"></span>
            <span class="label-checkbox__box"></span> {{ name }}
        </label>
    </div>
</template>

<script type="text/javascript">
    export default{
        props: {
            error: false,
            value: {type: Boolean, default: false},
            name: {type: String, default: ''}
        },
        methods: {
            onChange(evt) {
                if(evt.target.checked) {
                    this.$emit('checked', true);
                } else {
                    this.$emit('checked', false);
                }
            }
        },
        computed: {
            uniqueId() {
                return this.name.replace(/\s/g, '_');
            }
        }
    }
</script>