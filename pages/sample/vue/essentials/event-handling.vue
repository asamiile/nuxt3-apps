<script setup>
// https://ja.vuejs.org/guide/essentials/event-handling.html#accessing-event-argument-in-inline-handlers

// インラインハンドラーのイベント引数へのアクセス
function warn(message, event) {
  // これでネイティブイベントにアクセスできるようになりました
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
</script>

<template>
<div>

  <!-- インラインハンドラーのイベント引数へのアクセス -->
  <!-- 特殊変数 $event を使用する場合 -->
  <button @click="warn('Form cannot be submitted yet.', $event)">
    Submit
  </button>

  <!-- インラインでアロー関数を使用する場合 -->
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">
    Submit
  </button>

</div>
</template>

<style>
</style>