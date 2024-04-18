<script setup>
// テンプレート内で v-focus が有効になります
const vFocus = {
  mounted: (el) => el.focus()
}
</script>

<template>
  <input v-focus />
</template>