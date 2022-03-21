<template>
  <h1 class="text-[8rem]">Test</h1>
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
