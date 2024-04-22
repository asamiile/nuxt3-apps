<script setup>
import TheHeader from '~/components/sample/TheHeader.vue'
</script>

<template>
  <div>
    <TheHeader />
    <!-- <main class="main"> -->
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.main {
  background-color: #dcdcdc;
}
</style>