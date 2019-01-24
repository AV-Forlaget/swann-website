const contentful = require('contentful')
// export `createClient` to use it in page components
export default {
  config() {
    return {
      space: process.env.CTF_SPACE_ID,
      accessToken: process.env.CTF_CDA_ACCESS_TOKEN
    }
  },
  createClient () {
    return contentful.createClient(this.config());
  }
}