import  type {MutationTree,ActionTree,GetterTree}  from 'vuex'
import  type  {State}  from '../index'
//定义类型限制接口interface
export  interface UsersState{
    username:string,
    age:number
}


let state:UsersState = {
    username:'zhuzhu',
    age:121
};
//<UsersState,State>//参数1是为了访问当前模块下的state的变量  参数2是引入的主模块下的
//不知道类型注解几个参数看上图
let getters:GetterTree<UsersState,State> = {
    // dobulecount:state=>state.age*2
    // 或者
    dobulecount(state){
        return state.age*2
    }
};
let mutations:MutationTree<UsersState> = {
    change(state){
        console.log(state.age)
    }
};
let actions:ActionTree<UsersState,State> = {};
export default {
  namespace: true,//开始模块命名空间
  state,
  getters,
  mutations,
  actions,
};
