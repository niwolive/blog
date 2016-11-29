<template>
  <div id="app">
    <cwf-heading id="cwf-heading"></cwf-heading>
    <cwf-main id="cwf-main"></cwf-main>
    <cwf-footer id="cwf-footer"></cwf-footer>
  </div>
</template>

<script>
  import CwfHeading from './CwfHeading.vue'
  import CwfMain from './CwfMain.vue'
  import CwfFooter from './CwfFooter.vue'

  export default {
    components: {
      CwfHeading,
      CwfMain,
      CwfFooter
    }
  }
</script>

<style>
  @import "//fonts.googleapis.com/css?family=Open+Sans";

  body {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    font-family: 'Open Sans';
    color: #404040;
  }

  @media (min-width: 768px) {
    #app {
      width: 980px; 
    }
  }
</style>
