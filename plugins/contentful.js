const contentful = require('contentful')
// export `createClient` to use it in page components
export default {
  config() {
    return {
      space: 'y4qloewutpau',
      accessToken: '1bddab230a3f8524938d08c0c18b83128e0afc075a5a73b8c92d55ea4aadd148'
    }
  },
  createClient () {
    return contentful.createClient(this.config());
  }
}