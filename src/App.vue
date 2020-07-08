<template>
  <div id="app">
    <main-bar></main-bar>
    <router-view/>
  </div>
</template>

<style>
@import "assets/css/base.css";
</style>
<script>
  import MainBar from "./components/content/MainBar";
  export default {
    components: {MainBar}
  }
</script>
