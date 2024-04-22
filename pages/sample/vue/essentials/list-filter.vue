<script setup>
// https://ja.vuejs.org/guide/essentials/list.html#replacing-an-array

const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

// 配列の置き換え
items.value = items.value.filter((item) => item.message.match(/Foo/))

// フィルタリング/並べ替えの結果を表示する
const numbers = ref([1, 2, 3, 4, 5])

const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0)
})

// 算出プロパティが使えない場所（例えばネストされた v-for ループの内側）では、以下のようにメソッドを使用
const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
])

function even(numbers) {
  return numbers.filter((number) => number % 2 === 0)
}
</script>

<template>
<div>

  
  <li v-for="item in items">
    {{ item.message }}
  </li>
  
  <!-- フィルタリング/並べ替えの結果を表示する -->
  <li v-for="n in evenNumbers">{{ n }}</li>

  <!-- 算出プロパティが使えない場所（例えばネストされた v-for ループの内側）では、以下のようにメソッドを使用 -->
  <ul v-for="numbers in sets">
    <li v-for="n in even(numbers)">{{ n }}</li>
  </ul>

</div>
</template>

<style>
</style>