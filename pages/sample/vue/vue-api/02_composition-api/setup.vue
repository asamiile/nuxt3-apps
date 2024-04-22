<script lang="ts">
// https://ja.vuejs.org/api/composition-api-setup.html
import { ref, toRefs, toRef } from 'vue'

export default {
  props: {
    title: String
  },
  setup(props) {
    const count = ref(0)

    // テンプレートや他の Options API フックを公開します
    return {
      count
    }
    // const { title } = toRefs(props)
    // console.log(title.value)
    const title = toRef(props, 'title')
  },

  mounted() {
    console.log(this.count) // 0
  }
}
</script>

<template>
  <section>
    <button @click="count++">{{ count }}</button>
  </section>
</template>

<style scoped>
</style>