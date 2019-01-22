<template>
  <div class="home">
    <notice-bar>store中的状态：{{count}}</notice-bar>
    <van-button type="primary" @click="plus">+1</van-button>
    <van-button type="primary" @click="minus">-1</van-button>
  </div>
</template>

<script>
  import { Button, NoticeBar } from 'vant'
  import { mapState } from 'vuex'

  export default {
    name: 'Home',
    components: { VanButton: Button, NoticeBar },
    data () {
      return {}
    },
    computed: {
      ...mapState(['count'])
    },
    methods: {
      plus () {
        return this.$store.commit('plus')
      },
      minus () {
        return this.$store.commit('minus')
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
