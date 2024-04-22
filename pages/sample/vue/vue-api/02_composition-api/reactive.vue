<script setup lang="ts">
// https://ja.vuejs.org/api/reactivity-core.html

import { reactive, ref } from 'vue'

// リアクティブなオブジェクトの作成:
// const obj = reactive({ count: 0 })
// obj.count++


// Ref のアンラップ:
const count = ref(1)
const obj = reactive({ count })

// ref はアンラップされます
console.log(obj.count === count.value) // true

// `obj.count` を更新します
count.value++
console.log(count.value) // 2
console.log(obj.count) // 2

// `count` ref も更新します
obj.count++
console.log(obj.count) // 3
console.log(count.value) // 3


// 配列やコレクションの要素
// const books = reactive([ref('Vue 3 Guide')])
// // ここでは .value が必要です
// console.log(books[0].value)

// const map = reactive(new Map([['count', ref(0)]]))
// // ここでは .value が必要です
// console.log(map.get('count').value)


// reactive プロパティに ref を割り当て
// const count = ref(1)
// const obj = reactive({})

// obj.count = count

// console.log(obj.count) // 1
// console.log(obj.count === count.value) // true
</script>

<template>
  <div></div>
</template>
