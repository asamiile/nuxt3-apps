<script setup>
import { inject } from 'vue'
import { countSymbol } from './injectionSymbols'

// デフォルト値なしの静的な値を注入
const path = inject('path')

// リアクティブな値を注入
const count = inject('count')

// シンボルのキーを使って注入
const count2 = inject(countSymbol)

// デフォルト値ありで注入
const bar = inject('path', '/default-path')

// 関数のデフォルト値を使って注入
const fn = inject('function', () => {})

// デフォルト値のファクトリーを使って注入
const baz = inject('factory', () => new ExpensiveObject(), true)
</script>

<template>
</template>

