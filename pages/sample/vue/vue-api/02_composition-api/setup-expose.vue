<script lang="ts">
// https://ja.vuejs.org/api/composition-api-setup.html

export default {
  setup(props, { expose }) {
    // インスタンスを"隠蔽"します -
    // つまり、 全てを親に公開しません
    expose()

    const publicCount = ref(0)
    const privateCount = ref(0)
    // ローカルステートを選択的に公開します
    expose({ count: publicCount })
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