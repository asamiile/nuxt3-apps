<script setup>
// https://ja.vuejs.org/guide/essentials/computed.html#writable-computed
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter 関数
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter 関数
  set(newValue) {
    // 注意: ここでは、分割代入構文を使用しています。
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>

<template>
  <input v-model="fullName" placeholder="Enter your full name" />
  <p>Your full name is: {{ fullName }}</p>
</template>