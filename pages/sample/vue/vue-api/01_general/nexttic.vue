<script setup lang="ts">
import { ref, nextTick } from 'vue'
const count = ref(0)

async function increment() {
  count.value++

  // DOM はまだ更新されていない
  console.log(document.getElementById('counter').textContent) // 0

  await nextTick()
  // ここでは DOM が更新されている
  console.log(document.getElementById('counter').textContent) // 1
}
</script>

<template>
  <section>
    <button id="counter" @click="increment">{{ count }}</button>
  </section>
</template>

<style scoped>
</style>