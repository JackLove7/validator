<template>
  <div class="about">
    <h1>This is an Home page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created () {
    axios.get('/api/userinfo')
  }
}
</script>
