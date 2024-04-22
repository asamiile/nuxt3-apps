<script setup lang="ts">
// https://ja.vuejs.org/guide/essentials/template-refs.html

import { ref, onMounted } from 'vue'

// 要素の参照を保持する ref を宣言します。
// 名前は、テンプレートの ref の値に一致させる必要があります。
// 参照にアクセスできるのは、コンポーネントがマウントされた後に限られる
// const input = ref(null)

// テンプレート参照の型付け
// コンポーネントがマウントされるまでは ref の初期値は null であり、参照されていた要素が v-if によってアンマウントされた場合にも null にセットされる可能性がある
const input = ref<HTMLInputElement | null>(null)

onMounted(() => {
  input.value.focus()
})

// テンプレート参照の更新を監視する
watchEffect(() => {
  if (input.value) {
    input.value.focus()
  } else {
    // 要素がまだマウントされていない、または（v-if などによって）アンマウントされた
  }
})


// v-for の中の参照
const list = ref([1, 2, 3])

const itemRefs = ref([])

onMounted(() => {
  alert(itemRefs.value.map(i => i.textContent))
})
</script>

<template>
  <div>

    <input ref="input" />

    <!-- v-for の中の参照 -->
    <ul>
      <li v-for="item in list" ref="itemRefs">
        {{ item }}
      </li>
    </ul>

    <!-- 関数を使った参照 -->
    <!-- 要素がアンマウントされると、引数は null になる -->
    <input :ref="(el) => { /* el をプロパティまたは ref に保持する */ }">

</div>
</template>

<style scoped>
</style>