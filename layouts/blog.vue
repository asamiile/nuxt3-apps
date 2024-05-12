<script setup lang="ts">
import TheNavbar from "~/components/blog/TheNavbar.vue";

useHead({
  title: 'Nuxt 3 Bulma Blog Template',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.9.1/css/OverlayScrollbars.min.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Open+Sans'
    },
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/bulma@0.9.3/css/bulma.min.css'
    }
  ]
})
</script>

<template>
  <q-layout view="hHh lpR fFf">

    <!-- Header -->
    <!-- <Header /> -->
    <TheNavbar />

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