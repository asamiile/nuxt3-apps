<script setup lang="ts">
import TheHero from "~/components/blog/TheHero.vue";
import BlogPostList from "~/components/blog/BlogPostList.vue";

definePageMeta({
  layout: "blog",
})
</script>

<template>
  <div>
    <TheHero> A Nuxt Content v2 Blog with Bulma </TheHero>
    <BlogPostList />
  </div>
</template>