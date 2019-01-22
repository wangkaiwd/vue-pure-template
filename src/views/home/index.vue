<template>
  <div class="home">
    <notice-bar>store中的状态：{{count}}</notice-bar>
    <van-button type="primary" @click="plus">+1</van-button>
    <van-button type="primary" @click="minus">-1</van-button>
    <van-button type="primary" @click="asyncPlus">+1(async)</van-button>
    <van-button type="danger">
      {{name}}
    </van-button>
    <van-button type="danger">
      {{goodsName}}
    </van-button>
  </div>
</template>

<script>
  import { Button, NoticeBar } from 'vant'
  import { mapState, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'Home',
    components: { VanButton: Button, NoticeBar },
    data () {
      return {}
    },
    computed: {
      ...mapState(['count']),
      //当定义命名空间的时候，第一个参数是命名空间字符串
      //或者使用createNamespacedHelpers创建基于某个命名空间辅助函数
      ...mapState('user', ['name']),
      ...mapState('goods', { goodsName: 'name' })
    },
    methods: {
      ...mapMutations(['plus', 'minus']),
      ...mapActions(['asyncPlus'])
    }
  }
</script>

<style lang="scss" scoped>
</style>
