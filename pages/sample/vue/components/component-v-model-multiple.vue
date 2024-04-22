<script setup>
// https://ja.vuejs.org/guide/components/v-model.html#multiple-v-model-bindings

import { ref } from 'vue'
import UserName from '~/components/sample/component-v-model/UserName.vue'

const first = ref('John')
const last = ref('Doe')
</script>

<template>
  <h1>{{ first }} {{ last }}</h1>
  <UserName
    v-model:first-name="first"
    v-model:last-name="last"
  />
</template>