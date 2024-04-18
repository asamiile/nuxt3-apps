<script setup lang="ts">
import { provide, inject } from 'vue'
import type { InjectionKey } from 'vue'

const key = Symbol() as InjectionKey<string>

provide(key, 'foo') // string 型以外の値を渡すとエラーになる

// const foo = inject(key) // foo: string | undefined の型


// 明示的に型付け
// const foo = inject<string>('foo') // 型: string | undefined

// デフォルト値を提供することで、undefined 型を取り除く
// const foo = inject<string>('foo', 'bar') // type: string

// 値を強制的に型アサーション
const foo = inject('foo') as string
</script>

<template>
</template>