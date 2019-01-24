<template>
  <section class="main-content">
    <div class="content-section content-section--lines content-section--white">
      <div class="content-section__wrapper">
        <div class="content-block">
          <h2>Bliv stærkere sammen</h2>
          <p>Fælles oplevelser er vidt forskellige - både hvad angår pris, varighed og planlægning. Men fælles for dem er, at de styrker dit hold, din klub og dig selv.</p>
        </div>
        <div class="content-block content-block--small">
            <img src="@/assets/img/oplevelser-intro.png" alt="" class="masked-image right-space">
        </div>
      </div>
    </div>
    <div class="content-section content-section--bg">
      <div class="content-grid">
        <experience v-for="experience in experiences" :content="experience.fields" :key="experience.sys.id"></experience>
      </div>
    </div>
  </section>
</template>

<script>
import Experience from '~/components/Experience.vue';
import contentful from '~/plugins/contentful.js'
export default {
  asyncData({env}) {
      let client = contentful.createClient();
      return Promise.all([
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': 'experience',
          order: '-sys.createdAt'
        })
      ]).then(([experience]) => {
        // return data that should be available
        // in the template
        return {
          experiences: experience.items
        }
      }).catch(console.error)
  },
  components: {
    Experience
  }
}
</script>