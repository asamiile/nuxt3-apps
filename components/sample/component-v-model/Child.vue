<script setup>
// https://ja.vuejs.org/guide/components/v-model.html

const model = defineModel()

// v-model を必須にする
// const model = defineModel({ required: true })

// デフォルト値を提供する
// const model = defineModel({ default: 0 })

// defineModel() の第一引数に文字列を渡すことで、対応する引数をサポートできる
// const title = defineModel('title')
const title = defineModel('title', { required: true })
</script>

<template>

  <div>

    <span>My input</span> 
    <input v-model="model">
    
    <input type="text" v-model="title" />

  </div>

</template>