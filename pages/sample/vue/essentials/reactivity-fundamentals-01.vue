<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}


// ディープなリアクティビティー
const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // これらは期待通りに動作します。
  obj.value.nested.count++
  obj.value.arr.push('baz')
}


// DOM 更新のタイミング
// import { nextTick } from 'vue'

// async function increment() {
//   count.value++
//   await nextTick()
//   // DOM が更新されました
// } 
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>
</template>