<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $mainPage-color;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $mainPage-color;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
