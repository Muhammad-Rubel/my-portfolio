<template>
  <section>
    <div>
      <div v-for="(item, i) in items" :key="i">
        <div>
          <img :src="item.outerImage" alt="" />
          <img :src="item.innerImage" alt="" />
        </div>

        <h2>{{ item.title }}</h2>
        <p>{{ item.details }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      items: [
        {
          title: 'Pixel Perfect',
          details:
            'Most common methods for designing websites that work well on desktop is responsive and adaptive design.',
          outerImage: require('@/assets/images/feature/1.png'),
          innerImage: require('@/assets/images/feature/pin.svg'),
        },
        {
          title: 'High Quality',
          details:
            'Most common methods for designing websites that work well on desktop is responsive and adaptive design.',
          outerImage: require('@/assets/images/feature/2.png'),
          innerImage: require('@/assets/images/feature/paint.svg'),
        },
        {
          title: 'Awesome Idea',
          details:
            'Most common methods for designing websites that work well on desktop is responsive and adaptive design.',
          outerImage: require('@/assets/images/feature/3.png'),
          innerImage: require('@/assets/images/feature/idea.svg'),
        },
      ],
    }
  },
})
</script>

<style scoped></style>
