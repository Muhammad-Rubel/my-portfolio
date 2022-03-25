<template>
  <div>
    <Hero></Hero>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Post from '@/types/Post'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'default',

  data() {
    return {
      posts: [] as Post[],
    }
  },
})
</script>
