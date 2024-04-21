<script setup>
import Child from '~/components/sample/component-v-model/Child.vue'
import { ref } from 'vue'

const msg = ref('Hello World!')
const title = ref('v-model argument example')
</script>

<template>
  <h1>{{ msg }}</h1>
  <Child v-model="msg" />
  <Child v-model:title="title" />

</template>
