<template>
  <div id="app">
    <HeaderComp />
    <JumboComp />
    <MainComp />
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import JumboComp from './components/JumboComp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    JumboComp,
    MainComp,
    FooterComp
  }
}
</script>

<style lang="scss">
  @import './assets/style/general.scss';

  #app {
    min-width: 1300px;
  }

</style>
