<script setup>
// https://ja.vuejs.org/guide/essentials/computed.html

import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// 算出プロパティの参照
// 算出プロパティはリアクティブな依存関係にもとづきキャッシュされる
// 算出プロパティは、リアクティブな依存関係が更新されたときにだけ再評価される
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})


// // 同じ処理をメソッドで行う場合
// // メソッド呼び出しは、再描画が起きると常に関数を実行する
// // キャッシングがなければ必要以上に list の getter を実行することになってしまう
// <p>{{ calculateBooksMessage() }}</p>

// // コンポーネント内
// function calculateBooksMessage() {
//   return author.books.length > 0 ? 'Yes' : 'No'
// }

// リアクティブな依存ではないため、次の算出プロパティは二度と更新されない
// const now = computed(() => Date.now())
</script>

<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</template>