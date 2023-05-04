<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>学校:{{getSchool('北京')}}</div>
    <div>学校:{{getSchool('天津')}}</div>
    <div>num:{{$store.state.num}}</div>
    <div>测试vuex</div>
    <testComponent msg="Welcome to testComponent"/>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import testComponent from '@/components/testComponent.vue'
import { useStore } from 'vuex'
import { TestApi } from '@/apis'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    testComponent
  },
  setup() {
    const store = useStore()
    let count = store.state.num;
    // console.log(store.state.pruducts.shopCart[0].price)
    //console.log(store.commit("pruduct/raisePrice",2))
    function getSchool(val: string) {
      count++
      store.state.num = count
      return val + '第' + count + '小学'
    }
    console.log(TestApi)
    TestApi().then(res => console.log(res)).catch(err => console.log(err))
    return {getSchool}
  }
}
</script>
