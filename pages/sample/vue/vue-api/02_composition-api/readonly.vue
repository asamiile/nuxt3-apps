<script setup lang="ts">
// https://ja.vuejs.org/api/reactivity-core.html

import { reactive } from 'vue'

const original = reactive({ count: 0 })

const copy = readonly(original)

watchEffect(() => {
  // リアクティビティーの追跡に有効です
  console.log(copy.count)
})

// 変数 original を変更することは、変数 copy に依存するウォッチャーが起動します
original.count++

// 変数 copy を変更することは、失敗し警告が発生します
copy.count++ // warning!
</script>

<template>
  <div></div>
</template>
