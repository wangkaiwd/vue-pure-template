<template>
  <div class="home">
    <notice-bar>store中的状态：{{count}}</notice-bar>
    <van-button type="primary" @click="plus">+1</van-button>
    <van-button type="primary" @click="minus">-1</van-button>
  </div>
</template>

<script>
  import { Button, NoticeBar } from 'vant'

  export default {
    name: 'Home',
    components: { VanButton: Button, NoticeBar },
    data () {
      return {}
    },
    computed: {
      count () {
        return this.$store.state.count
      }
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
