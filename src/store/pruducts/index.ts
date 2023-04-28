import { createStore } from 'vuex'

export default createStore({
  //设置模块的命名空间，允许系统识别
  namespaced:true,
  state() {
    return {
        shopCart: [
            { name: "西瓜", price: 2 },
            { name: "苹果", price: 3 },
            { name: "梨", price: 5 },
            { name: "榴莲", price: 20 },
            { name: "葡萄", price: 4 }
        ]
    }
  },
  mutations: {
    raisePrice(state, price) {
        //接受state作为第一个参数,也可以向store.commit传入额外的参数
        state.shopCart.forEach(p => {
          p.price += price;
        })
      }
  },
  actions: {
    salePros(context, b) {//actions中第一参数不能用store，此时用什么名字都行
        setTimeout(function () {
          context.commit("raisePrice", b);
        }, 1000);
      }
  },
  modules: {
  },
})
