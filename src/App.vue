<template>
  <div id="app">
    <HeaderComp />
    <JumboComp />
    <MainComp />
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import JumboComp from './components/JumboComp.vue'
import MainComp from './components/MainComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    JumboComp,
    MainComp
  }
}
</script>

<style lang="scss">
  @import './assets/style/general.scss';


</style>
