<template>
  <section class="bg-[#3e4454] h-screen flex justify-center items-center">
    <div
      class="max-w-1090 px-4 md:px-8 xl:px-0 pt-12 pb-20 lg:flex justify-between items-center"
    >
      <!-- image -->
      <div
        class="px-20 flex justify-center items-center lg:order-last lg:w-5/12 lg:px-0"
      >
        <img
          src="@/assets/images/hero/avatar.png"
          alt=""
          class="w-64 lg:w-80"
        />
      </div>

      <!-- text -->
      <div class="mt-6 md:mt-10 lg:w-6/12">
        <h2
          class="text-center text-lg text-orange font-semibold lg:text-left lg:text-2xl"
        >
          Hello, I'm
        </h2>
        <h3
          class="text-center text-white font-semibold text-4xl mt-1 lg:text-left lg:text-6xl lg:mt-3"
        >
          James Smith
        </h3>
        <h1
          class="text-lg text-center text-white mt-2 lg:text-left lg:text-xl lg:mt-4"
        >
          A <span class="text-green">Creative Designer</span> From
          <span class="text-yellow">New York</span>
        </h1>

        <p
          class="text-center mt-3 text-white tracking-wide lg:text-left lg:text-lg lg:mt-6"
        >
          I'm creative designer based in New York, and I'm very passionate and
          dedicated to my work.
        </p>

        <div class="flex justify-center mt-8 lg:justify-start">
          <button class="text-white px-8 py-3 rounded-3xl bg-orange">
            About Me
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
