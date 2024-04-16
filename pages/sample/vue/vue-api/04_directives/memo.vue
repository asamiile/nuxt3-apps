<template>
  <div v-memo="[count]">
    Count is: {{ count }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// リアクティブなデータ
const count = ref(0)
</script>