<script setup lang="ts">
// function handleChange(event) {
//   // `event` は、暗黙の `any` 型
//   console.log(event.target.value)
// }

// 明示的にイベントハンドラーの引数を型付け
function handleChange(event: Event) {
  console.log((event.target as HTMLInputElement).value)
}
</script>

<template>
  <input type="text" @change="handleChange" />
</template>