<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  mounted () {
    this.getAddress()
    this.getUserInfo()
  },
  components: {
    FooterGuide
  },
  methods: {
    ...mapActions(['getAddress', 'getUserInfo'])
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
