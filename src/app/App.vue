<template>
  <div id="app">
    <cwf-heading id="cwf-heading"></cwf-heading>
    <router-link v-for="post in postList" :to="post.route">post.title</router-link>
    <cwf-footer id="cwf-footer"></cwf-footer>
  </div>
</template>

<script>
  import VueRouter from 'vue-router'
  import CwfPost from './CwfHeading.vue'
  import CwfHeading from './CwfHeading.vue'
  import CwfFooter from './CwfFooter.vue'

  const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      {path: '/', name: 'home', component: CwfMain },
      {path: '/:title', name: 'post', component: CwfPost} 
    ]
  });

  export default {
    router,
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
