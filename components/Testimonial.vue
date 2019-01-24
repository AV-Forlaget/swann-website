<template>
    <div class="testimonial-block">
        <div class="testimonial-person">
            <div class="testimonial-person__avatar">
            <div class="testimonial-person__avatar__img">
                
            </div>
            </div>
            <div class="testimonial-person__content">
            <span class="testimonial-person__content__name" v-text="content.name"></span>
            <span class="testimonial-person__content__job" v-text="content.job"></span>
            </div>
        </div>
        <div class="testimonial-quote">
            <p v-text="content.quote"></p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {type: Object, default() {return { }}}
    }
}
</script>
