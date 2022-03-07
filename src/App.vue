<template>
  <div id="app">
    <HeaderComp />
    <JumboComp />
    <MainComp />
    <FooterComp />
    <SettingsComp class="settings" :id="options" @settings="toggleSettings"/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import JumboComp from './components/JumboComp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'
import SettingsComp from './components/SettingsComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    JumboComp,
    MainComp,
    FooterComp,
    SettingsComp
  },
  data() {
    return {
      options: 'hide',
    }
  },
  methods: {
    toggleSettings(settings) {
      if(settings) {
        this.options = "show";
      }
      else this.options = "hide";
    }
  }
}
</script>

<style lang="scss">
  @import './assets/style/general.scss';

  #app {
    min-width: 1300px;

    .settings {
      position: fixed;
      top: 20%;
      transition: 200ms;

      &#show {
        left: 0;
      }

      &#hide {
        left: -200px;
      }

    }
  }

</style>
