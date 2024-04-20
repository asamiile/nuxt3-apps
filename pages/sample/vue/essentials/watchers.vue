<script setup lang="ts">
// https://ja.vuejs.org/guide/essentials/watchers.html

import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      loading.value = false
    }
  }
})


// 監視ソースの種類
// const x = ref(0)
// const y = ref(0)

// // 単一の ref
// watch(x, (newX) => {
//   console.log(`x is ${newX}`)
// })

// // getter
// watch(
//   () => x.value + y.value,
//   (sum) => {
//     console.log(`sum of x + y is: ${sum}`)
//   }
// )

// // 複数のソースの配列
// watch([x, () => y.value], ([newX, newY]) => {
//   console.log(`x is ${newX} and y is ${newY}`)
// })


// // リアクティブのオブジェクトのプロパティを監視
// watch(
//   () => obj.count,
//   (count) => {
//     console.log(`count is: ${count}`)
//   }
// )


// // 即時ウォッチャー
// watch(
//   source,
//   (newValue, oldValue) => {
//     // すぐに実行され、`source` が変更されると再び実行される
//   },
//   { immediate: true }
// )


// // 一度きりのウォッチャー
// watch(
//   source,
//   (newValue, oldValue) => {
//     // `source` が変更された時、一度だけトリガーされる
//   },
//   { once: true }
// )


// // watchEffect() によって、コールバックのリアクティブな依存関係を自動的に追跡
// watchEffect(async () => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
//   )
//   data.value = await response.json()
// })


// // 遅延ウォッチャー
// watch(source, callback, {
//   flush: 'post'
// })

// watchEffect(callback, {
//   flush: 'post'
// })

// // watchEffect()のエイリアス
// import { watchPostEffect } from 'vue'

// watchPostEffect(() => {
//   /* Vue 更新後に実行されます*/
// })


// // 同期ウォッチャー
// watch(source, callback, {
//   flush: 'sync'
// })

// watchEffect(callback, {
//   flush: 'sync'
// })

// // watchEffect()のエイリアス
// import { watchSyncEffect } from 'vue'

// watchSyncEffect(() => {
//   /* リアクティブなデータ変更時に同期的に実行される */
// })


// // 手動でウォッチャーを停止
// const unwatch = watchEffect(() => {})

// // ...あとで、もはや必要なくなったとき
// unwatch()


// // 非同期のデータを待つ必要がある場合はwatch のロジックを条件付きにする
// // 非同期的にロードされるデータ
// const data = ref(null)

// watchEffect(() => {
//   if (data.value) {
//     // データがロードされたときに何かを実行します
//   }
// })
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" :disabled="loading" />
  </p>
  <p>{{ answer }}</p>
</template>