<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'ja'
  },
  titleTemplate: (pageTitle) => {
    return pageTitle
      ? `${pageTitle} | Nuxt3 Apps.`
      : 'Nuxt3 Apps.'
  },
  meta: [
    { name: 'description', content: '' }
  ],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
})

</script>

<style scoped>
</style>