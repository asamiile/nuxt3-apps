<script setup lang="ts">
useHead({
  title: 'Shaffle the List'
})

const listName = ref('')
</script>

<template>
  <section class="text-center">
    <h2 class="page-title">Shaffle the List</h2>

    <div class="row q-gutter-x-lg justify-center">
      <div class="col-xs-12 col-md-5 q-gutter-y-lg">
        <q-input standout filled :dense="dense" v-model="listName" label="Name" name="name_id" v-for="n in 5" :key="n" />
      </div>

      <div class="col-xs-12 col-md-5 q-gutter-y-lg">
        <q-card flat class="text-white bg-dark">
          <q-card-section style="min-height: 500px;">
            {{ listName }}
          </q-card-section>
        </q-card>
      </div>
    </div>

  </section>
</template>

<style scoped>
.page-title {
  @media (max-width: 599.99px) {
    font-size: 2.5rem;
  }
}
</style>