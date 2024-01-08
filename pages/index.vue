<script setup lang="ts">
useHead({
  title: 'Shaffle the List'
})

interface Name {
  names: string;
}

const names = ref(['', '', '', '']);

// Add the list
const addName = () => {
  names.value.push('');
}

// Shuffle the lists
const shuffleLists = () => {
  for (let i = names.value.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [names.value[i], names.value[j]] = [names.value[j], names.value[i]];
  }
}

// Reset the lists
const restLists = () => {
  names.value = ['', '', '', '']
}

</script>

<template>
  <section>
    <h2 class="page-title text-center text-weight-bold">Shaffle the List</h2>

    <div class="row q-gutter-x-lg justify-center">
      <div class="col-xs-11 col-md-4 q-gutter-y-lg">
        <q-input v-model="names[index]" v-for="(name, index) in names" :key="index" standout filled label="Name" />
        <button @click="addName">Add List</button>
        <button @click="shuffleLists">Shuffle The Lists</button>
        <button @click="restLists">Reset Lists</button>
      </div>

      <div class="col-xs-11 col-md-4 q-gutter-y-lg">
        <q-card flat class="text-white bg-dark">
          <q-card-section style="min-height: 300px;">
            <ul>
              <li v-for="(name, index) in names" :key="index">
                {{ index + 1 }}：{{ name }}
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