<script setup lang="ts">
useHead({
  title: 'Shaffle the List'
})
</script>

<template>
  <section class="text-center">
    <h2>Shaffle the List</h2>
    <q-input standout v-model="text" :dense="dense" />
  </section>
</template>

<style scoped>
.about-name {
  font-size: 2rem;
  @media (600px <= width) {
    font-size: 3rem;
  }
}

.about-name,
.q-img,
.about-skills {
  margin-bottom: 2.5rem;
}

.about-role,
.about-skills {
  font-size: 1.25rem;
  text-align: left;
  @media (600px <= width) {
    font-size: 1.5rem;
    text-align: center;
  }
}

.about-role-small {
  font-size: 0.875rem;
  @media (600px <= width) {
    font-size: 1.375rem;
  }
}
</style>