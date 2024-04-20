<script setup>
// https://ja.vuejs.org/guide/essentials/class-and-style.html#binding-inline-styles

const activeColor = ref('#F97583')
const fontSize = ref(30)

const styleObject = reactive({
  color: '#F97583',
  fontSize: '13px'
})
</script>

<template>
<div>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">aaa</div>
  <div :style="styleObject">aaa</div>

  <!-- 配列へのバインディング -->
  <div :style="[styleObject, baseStyles, overridingStyles]">aaa</div>
</div>
</template>

<style>
.red {
  color: #F97583;
}
</style>