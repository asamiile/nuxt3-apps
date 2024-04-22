<script setup>
// https://ja.vuejs.org/guide/components/v-model.html#handling-v-model-modifiers

// import { computed } from 'vue'

const [model, modifiers] = defineModel({
  set(value) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value
  }
})
</script>

<template>
  <input type="text" v-model="model" />
</template>