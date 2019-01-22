const goods = {
  namespaced: true,
  state: {
    name: 'I am goods'
  },
  mutations: {
    changeName (state) {
      state.name = 'goods-changeName'
    }
  },
  actions: {}
}
export default goods
