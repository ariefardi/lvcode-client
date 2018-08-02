<template>
  <div class="home">
    <Navbar/>
    <Article/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Article from '@/components/Article.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Navbar,
    Article
  }
}
</script>
