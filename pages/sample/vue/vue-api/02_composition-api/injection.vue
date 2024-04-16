<script lang="ts">
// https://ja.vuejs.org/api/composition-api-dependency-injection.html

import { ref, provide } from 'vue'
// import { countSymbol } from './injectionSymbols'

// 静的な値を提供
provide('path', '/project/')

// リアクティブな値を提供
const count = ref(0)
provide('count', count)

// シンボルのキーを使って提供
// provide(countSymbol, count)
</script>

<template>
  <div>
    <sample-inject />
  </div>
</template>
