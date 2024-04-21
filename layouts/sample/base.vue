<script setup>
import Footer from '~/components/sample/component-slot/Footer.vue'
</script>

<template>
  <div class="container">
    <main>
      <slot />
    </main>
    <Footer>
      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </Footer>
  </div>
</template>
