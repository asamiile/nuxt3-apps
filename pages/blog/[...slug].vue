<script setup>
import TheHero from "~/components/blog/TheHero.vue";
import BlogPostMeta from "~/components/blog/BlogPostMeta.vue";

definePageMeta({
  layout: "blog",
})

const { path } = useRoute()

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>

<template>
  <div>
    <TheHero>
      <template v-slot:default>{{ blogPost.title }}</template>

      <template v-slot:subtitle>
        <BlogPostMeta
          :author="blogPost.author"
          :date="blogPost.dates.published"
          color="dark"
        />
      </template>
    </TheHero>
    <div class="container">
      <section class="articles">
        <div class="column is-8 is-offset-2">
          <section class="blog-post-card card article">
            <div class="card-content">
              <div class="content article-body is-size-5">
                <ContentDoc />
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>
