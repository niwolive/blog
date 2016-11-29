<template>
  <article itemscope> 
    <hgroup>
      <h2>{{ post.title }}</h2>
    </hgroup>
    <p class="brief" v-html="toMarkdown(post.brief)"></p>
    <p v-html="toMarkdown(post.content)"></p>
  </article>
</template>

<script>
  const md = require('markdown-it')();

  export default {
    props: ['post'],
    methods: {
      toMarkdown: function ( input ){
        return md.render(input);
      }
    }
  }
</script>
