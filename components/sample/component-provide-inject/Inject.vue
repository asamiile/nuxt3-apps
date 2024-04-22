<script setup lang="ts">
import { inject } from 'vue'

const message = inject('message', 'default value')

// デフォルト値を作成するためのファクトリー関数を使用
// const value = inject('key', () => new ExpensiveClass(), true)


// リアクティビティーの利用
const { location, updateLocation } = inject('location')
</script>

<template>

  <div>
    <p>{{ message }}</p>
    <!-- リアクティビティーの利用 -->
    <button @click="updateLocation">{{ location }}</button>  
  </div>
</template>
