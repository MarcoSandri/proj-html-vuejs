<template>
  <div id="app">
    <HeaderComp />
    <JumboComp />
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import JumboComp from './components/JumboComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    JumboComp
  }
}
</script>

<style lang="scss">
  @import './assets/style/general.scss';


</style>
