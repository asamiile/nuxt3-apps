<script setup lang="ts">
useHead({
  title: ''
})

// ページロード時に一度だけ実行するときは
// serverのみで実行する
useServerSeoMeta({
  robots: 'index, follow'
})
</script>

<template>
  <section>
    <div class="sample"></div>
    <a href="#">link</a>
    
  </section>
</template>

<style scoped>
.sample {
  height: 100vh;
  border-bottom: 1px solid #000;
}
</style>