<script lang="ts">
// https://ja.vuejs.org/api/composition-api-setup.html
const count = ref(0)
console.log(count.value) // 0

count.value = 1
console.log(count.value) // 1
</script>

<template>
  <div></div>
</template>
