export default {
  middleware: 'auth',
  head () {
    return { title: this.$t('home') }
  }
}
