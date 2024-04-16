<script lang="ts">
// https://ja.vuejs.org/api/composition-api-setup.html

export default {
  data() {
    return { a: 1 }
  },
  created() {
    console.log(this.a) // 1
    console.log(this.$data) // { a: 1 }
  }
}
</script>

<template>
  <section>
  </section>
</template>

<style scoped>
</style>