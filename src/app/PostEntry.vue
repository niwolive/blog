<template>
  <article itemscope> 
    <hgroup>
      <h2>{{ post.title }}</h2>
    </hgroup>
    <section class="markdown-body">
      <slot></slot>
    </section>
  </article>
</template>

<script>
  import 'github-markdown-css'
  import 'highlight.js/styles/github.css'

  export default {
    props: ['post']
  }
</script>

