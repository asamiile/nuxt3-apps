<script lang="ts">
// https://ja.vuejs.org/api/reactivity-core.html

import { ref } from 'vue'

// 読み取り専用の算出 ref の作成:
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

// plusOne.value++ // エラー

// 書き込み可の算出 ref の作成:
// const count = ref(1)
// const plusOne = computed({
//   get: () => count.value + 1,
//   set: (val) => {
//     count.value = val - 1
//   }
// })

// plusOne.value = 1
// console.log(count.value) // 0

// デバッグ:
// const plusOne = computed(() => count.value + 1, {
//   onTrack(e) {
//     debugger
//   },
//   onTrigger(e) {
//     debugger
//   }
// })
</script>

<template>
  <div></div>
</template>
