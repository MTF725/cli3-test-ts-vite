import getters from './getters'
import { createStore } from 'vuex'
import pruducts from './pruducts'
import user from './user'
// console.log(getters)
export default createStore({
  // 分模块
  modules: {
    pruducts,
    user,
  },
  getters
});
