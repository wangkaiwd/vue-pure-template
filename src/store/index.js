import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  //mutations必须是同步的：如果有一个异步的mutations,那么devtools在mutations触发的时候，并不知道具体内容什么时候执行
  //实质上：任何在回调函数中进行的状态的改变都是不可被追踪的(在devtools中调试会出问题，导致debug难度增大)
  mutations: {
    plus (state) {
      state.count++
    },
    minus (state) {
      state.count--
    },
    asyncPlus (state) {
      setTimeout(() => state.count++, 1000)
    }
  },
  actions: {}
})
