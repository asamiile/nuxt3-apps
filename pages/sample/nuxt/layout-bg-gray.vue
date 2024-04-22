<script setup lang="ts">
definePageMeta({
  layout: 'sample-bg-color'
})

// Specify background color for html, body
useHead({
  bodyAttrs: { class: 'bg-color-body' },
})
</script>

<template>
  <section>

    <div class="container sample">
      sample
    </div>
    
  </section>
</template>

<style scoped>
.container {
  height: 100vh;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>