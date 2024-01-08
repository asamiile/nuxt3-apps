<script setup lang="ts">
useHead({
  title: 'Shaffle the List'
})

const names = ref(['', '', '', '']);

function addName() {
  names.value.push('');
}

function shuffleNames() {
  for (let i = names.value.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [names.value[i], names.value[j]] = [names.value[j], names.value[i]];
  }
}
</script>

<template>
  <section class="text-center">
    <h2 class="page-title text-weight-bold">Shaffle the List</h2>

    <div class="row q-gutter-x-lg justify-center">
      <div class="col-xs-12 col-md-5 q-gutter-y-lg">
        <q-input v-model="names[index]" v-for="(name, index) in names" :key="index" standout filled :dense="dense" label="Name" name="name_id" />
        <button @click="addName">Add Name</button>
        <button @click="shuffleNames">Shuffle Names</button>
      </div>

      <div class="col-xs-12 col-md-5 q-gutter-y-lg">
        <q-card flat class="text-white bg-dark">
          <q-card-section style="min-height: 500px;">
            <ul>
              <li v-for="(name, index) in names" :key="index">
                {{ name }}
              </li>
            </ul>
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