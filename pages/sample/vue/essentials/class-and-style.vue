<script setup>
// https://ja.vuejs.org/guide/essentials/class-and-style.html

// オブジェクトへのバインディング
const isActive = ref(true)
const hasError = ref(false)

// バインドするオブジェクト
// const classObject = reactive({
//   active: true,
//   'text-danger': false
// })

// オブジェクトを返す算出プロパティにクラスをバインド
const error = ref(null)
const classObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}))

// 配列へのバインディング
const activeClass = ref('active')
const errorClass = ref('text-danger')
</script>

<template>
<div>

  <!-- オブジェクトへのバインディング -->
  <div :class="{ active: isActive }">aaa</div>

  <div
    class="static"
    :class="{ active: isActive, 'text-danger': hasError }"
  >aaa</div>

  <div :class="classObject">aaa</div>

  <!-- 配列へのバインディング -->
  <div :class="[activeClass, errorClass]">aaa</div>
  <div :class="[isActive ? activeClass : '', errorClass]">aaa</div>
  <div :class="[{ activeClass: isActive }, errorClass]">aaa</div>
</div>
</template>

<style>
.active {
  color: gray;
}
</style>