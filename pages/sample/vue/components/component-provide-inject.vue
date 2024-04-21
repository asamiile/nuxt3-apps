<script setup>
import Inject from '~/components/sample/component-provide-inject/Inject.vue'

import { ref, provide, readonly } from 'vue'

// provide(/* key */ 'message', /* value */ 'hello!')

// const count = ref(0)
// provide('key', count)

const message = ref('hello')
provide('message', message)


// リアクティビティーの利用
const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation
})

// provide を通して渡されたデータがインジェクターコンポーネントによって変更されないようにしたい場合
const count = ref(0)
provide('read-only-count', readonly(count))
</script>

<template>
  <div>
    <input v-model="message">
    <Inject />
  </div>
</template>