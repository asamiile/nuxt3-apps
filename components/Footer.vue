<template>
  <q-footer class="row items-center justify-end text-center q-pa-md">
    <span class="footer-copyright">© {{ new Date().getFullYear() }} Nuxt Apps.</span>
    <a class="text-secondary q-pl-md" href="https://github.com/asamiile" target="_blank">
      <q-icon name="fa-brands fa-github" size="2rem"/>
    </a>
  </q-footer>
</template>

<style scoped>
.footer-copyright {
  font-size: 1rem;
}
</style>