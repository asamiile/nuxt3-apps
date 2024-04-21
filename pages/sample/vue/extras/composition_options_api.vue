<script lang="ts">
export default {
  inject: ['message'],
  data() {
    return {
      // 注入された値による初期 data
      fullMessage: this.message
    }
  }
}
</script>

<template>
  <div>
    Page: extras_composition_options_api
  </div>
</template>