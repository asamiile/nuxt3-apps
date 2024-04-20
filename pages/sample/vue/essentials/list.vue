<script setup>
// https://ja.vuejs.org/guide/essentials/list.html

const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

const parentMessage = ref('Parent')
// const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

// v-for をオブジェクトに適用
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
</script>

<template>
<div>

  <li v-for="item in items">
    {{ item.message }}
  </li>
  
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>

  <!-- 関数の引数で分割代入を使用する -->
  <li v-for="{ message } in items">
    {{ message }}
  </li>

  <!-- index のエイリアスを伴う場合 -->
  <li v-for="({ message }, index) in items">
    {{ message }} {{ index }}
  </li>

  <!-- ネストされた v-for -->
  <!-- <li v-for="item in items">
    <span v-for="childItem in item.children">
      {{ item.message }} {{ childItem }}
    </span>
  </li> -->

  <!-- of を使用 -->
  <div v-for="item of items"></div>

  <!-- v-for をオブジェクトに適用 -->
  <ul>
    <li v-for="value in myObject">
      {{ value }}
    </li>
  </ul>

  <li v-for="(value, key) in myObject">
    {{ key }}: {{ value }}
  </li>  

  <li v-for="(value, key, index) in myObject">
    {{ index }}. {{ key }}: {{ value }}
  </li>

  <!-- v-for で範囲を使用 -->
  <span v-for="n in 10">{{ n }}</span>
  
  <!-- key による状態管理 -->
  <div v-for="item in items" :key="item.id">
    <!-- 内容 -->
  </div>  

</div>
</template>

<style>
</style>