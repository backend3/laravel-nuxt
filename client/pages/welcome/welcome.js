import { mapGetters } from 'vuex'
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel, Slide
  },
  layout: 'simple',

  head () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: process.env.appName,
    slide: 0,
    sliding: null
  }),
  computed: mapGetters({
    authenticated: 'auth/check'
  }),
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
