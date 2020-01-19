import { mapGetters } from 'vuex'

export default {
  layout: 'simple',

  head () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: process.env.appName
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
