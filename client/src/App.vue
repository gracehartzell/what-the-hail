<template>
  <div id="app">
    <img src="./assets/hailLOGO.svg.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  border: 1px solid red;
  width: 100vw;
  height: 75px;
  display: flex;
}

img {
  height: 75px;
  margin-right: 20px;
}
</style>
