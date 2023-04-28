import { createStore } from 'vuex'

export default createStore({
  //设置模块的命名空间，允许系统识别
  namespaced:true,
  state() {
    return {
      userInfo:[
        {name:"张三",age:20},
        {name:"李四",age:30},
        {name:"王五",age:25}
      ]
    }
  },
  mutations: {
    raisePrice2(state, age) {
      //接受state作为第一个参数,也可以向store.commit传入额外的参数
      state.userInfo.forEach(p => {
        p.age += age;
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
