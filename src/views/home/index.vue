<template>
  <div class="home">
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="warning">
      警告按钮
    </van-button>
    <van-button
      type="danger"
      @click="onClick"
    >危险按钮
    </van-button>
  </div>
</template>

<script>
  import { Button } from 'vant'

  export default {
    name: 'Home',
    components: { VanButton: Button },
    data () {
      return {}
    },
    methods: {
      onClick () {
        console.log('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
