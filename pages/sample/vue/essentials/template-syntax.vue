<script setup lang="ts">
// https://ja.vuejs.org/guide/essentials/template-syntax.html

const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}
</script>

<template>
  <section>
    <!-- <div :id="dynamicId"></div>
    <button :disabled="isButtonDisabled">Button</button> -->
    <div v-bind="objectOfAttrs"></div>
    <!-- <a @click="doSomething">Button</a> -->
    
  </section>
</template>

<style scoped>
</style>