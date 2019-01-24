const contentful = require('contentful')
// export `createClient` to use it in page components
export default {
  config(env) {
    return {
      space: env.CTF_SPACE_ID,
      accessToken: env.CTF_CDA_ACCESS_TOKEN
    }
  },
  createClient (env) {
    return contentful.createClient(this.config(env));
  }
}