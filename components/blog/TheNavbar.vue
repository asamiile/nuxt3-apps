<script setup>
const isMobileNavOpen = ref(false)
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/blog" class="navbar-item has-text-weight-bold is-size-5">
          My Nuxt 3 Blog
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar.is-white {
  background: #f0f2f4;
}
.navbar-brand .brand-text {
  font-size: 1.11rem;
  font-weight: bold;
}
</style>