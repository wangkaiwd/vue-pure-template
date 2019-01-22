const user = {
  namespaced: true,
  state: {
    name: 'I am user'
  },
  //同步更改state中的状态
  mutations: {
    changeName (state) {
      state.name = 'user-changeName'
    }
  },
  //异步更改state中的状态
  actions: {}
}
export default user
