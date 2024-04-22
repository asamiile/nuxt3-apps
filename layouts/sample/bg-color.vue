<script setup>
import TheHeader from '~/components/sample/TheHeader.vue'
import TheFooter from '~/components/sample/TheFooter.vue'
</script>

<template>
  <div>
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
:global(.bg-color-body) {
  color: #fff;
  background-color: #6b6b6b;
}
</style>