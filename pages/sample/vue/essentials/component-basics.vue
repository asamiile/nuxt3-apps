<script setup>
import { ref } from 'vue'
import BlogPost from '~/components/sample/BlogPost.vue'
  
// カスタム属性としてデータを渡す
// const props = defineProps(['title'])
// console.log(props.title)

// 動的な props の値を渡す
const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

// イベントの購読
const postFontSize = ref(1)
</script>

<template>
  <div>

    <!-- カスタム属性としてデータを渡す -->
    <!-- <BlogPost title="My journey with Vue" />
    <BlogPost title="Blogging with Vue" />
    <BlogPost title="Why Vue is so fun" />   -->
    
    <!-- 動的な props の値を渡す -->
    <div :style="{ fontSize: postFontSize + 'rem' }">
      <BlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        @enlarge-text="postFontSize += 1"
      ></BlogPost>
      <!-- 1回だけ呼び出す -->
      <!-- <BlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        @enlarge-text.once="postFontSize += 1"
      ></BlogPost> -->
    </div>
    
  </div>
</template>