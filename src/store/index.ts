import { createStore } from "vuex";
import type { InjectionKey } from "vue";
import type { Store } from "vuex"; 
import   { useStore as baseUseStore, } from "vuex"; 
import users from "./modules/users";
// 引入模块下的文件类型
import { UsersState } from "./modules/users";
// 限制类型
export interface State {
  count: number;
  
}
//继承主模块下的接口 (变化部分)
interface StateAll extends State{
   users:UsersState, //UsersState是上面引入的类型 users是自己定义的名
   //若是多个模块  依次类推
}

//这个就不可使用了 要换成下面的继承之后的接口
// export const key: InjectionKey<Store<State>> = Symbol();
 export const key: InjectionKey<Store<StateAll>> = Symbol();
 
export default createStore<State>({
  //加类型注解 里面的参数才会生效 
  state: { count: 211 },
  getters: {
    // dobuleCount:state=>state.count*2,
    // 或者
    dobuleCount(state){return  state.count*2}
  },
  mutations: {
    add(state,payload:number){
      console.log(state.count)
    }
  },
  actions: {},
  modules: {
     users
     },
});
// 定义自己的 `useStore` 组合式函数 这里也有了变化
 export function useStore () {
   return baseUseStore(key)//把key导出去了
 }

