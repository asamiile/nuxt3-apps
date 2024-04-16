<script setup lang="ts">
</script>

<template>
  <q-layout view="hHh lpR fFf">

    <!-- Header -->
    <!-- TODO: ページファイルにbooleanを渡して表示非表示を切り替える -->
    <!-- <Header /> -->

    <!-- Main -->
    <!-- TODO: containerにクラス名を動的に付与する -->
    <q-page-container class="q-px-md">
      <q-page class="q-py-xl">
        <slot />
      </q-page>
    </q-page-container>

    <!-- Footer -->
    <Footer />

  </q-layout>
</template>

<style scoped>
.q-layout {
  font-size: 1rem;
}

.q-page-container {
  @media (600px <= width) {
    max-width: 75rem;
    margin: auto;
  }
}
</style>