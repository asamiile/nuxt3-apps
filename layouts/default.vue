<script setup lang="ts">
</script>

<template>
  <q-layout view="hHh lpR fFf">

    <!-- Header -->
    <!-- <Header /> -->

    <!-- Main -->
    <q-page-container class="q-px-md">
      <q-page class="q-py-xl">
        <slot />
      </q-page>
    </q-page-container>

    <!-- Footer -->
    <Footer />

  </q-layout>
</template>

<style scoped>
.q-layout {
  font-size: 1rem;
}

.q-page-container {
  @media (600px <= width) {
    max-width: 75rem;
    margin: auto;
  }
}
</style>