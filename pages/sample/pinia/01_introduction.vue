<script setup lang="ts">
import { useCounterStore } from '@/stores/sample/counter'
import { storeToRefs } from 'pinia'

const counter = useCounterStore()

// counter.count++
// // with autocompletion ✨
// counter.$patch({ count: counter.count + 1 })
// // or using an action instead
// counter.increment()

const { name, doubleCount } = storeToRefs(store)
const { increment } = store
</script>

<template>
  <!-- Access the state directly from the store -->
  <div>Current Count: {{ counter.count }}</div>
</template>