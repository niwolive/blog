<template>
  <section class="cwf-container">
    <post-entry v-for="post in postList" v-bind:post="post"></post-entry>
  </section>
</template>

<script>
  import PostEntry from './PostEntry.vue'

  export default {
    data: function(){
      return {
        postList: [
          { title: '#codingwithflair - what does it even mean?',
            brief: '', 
            content: ' Commitment to make your code as expressive as possible.  Encapsulating meaning and intention within your code.  Using appropriate programming concepts when appropriate. Functionnal programming for transformation.  Having flair is preventing code smell '},
          { title: 'Expressing the « obvious » - with modifiers',
            brief: 'Code is expressive - or has <em>flair</em>, when it grabs on all opportunities a language offers to communicate what each and every statement does. Modern Javascript includes three keywords you can use to determine the scope and mutability of a variable. These are `var`, `let` and `const`, and can also be reffered to as `modifiers`.', 
            content: 'Give flair to this code by using the most revelant variable modifier.  <pre> </pre> <button>Explain</button>'},
        ]
      }
    },
    components: {
      PostEntry
    }
  }
</script>

<style>
  #cwf-main {
    text-align: justify;
  }
  .cwf-container > article {
    margin-top: 100px;
  }
</style>
