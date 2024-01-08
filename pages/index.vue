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
    <h2 class="page-title text-center text-weight-bold q-mb-sm">Shaffle the List</h2>
    <p class="text-subtitle1 text-center q-mb-xl">Enter text and click "SHUFFLE" button.</p>

    <div class="row q-gutter-x-lg justify-center">
      <div class="col-xs-11 col-md-4 q-gutter-y-lg">
        <q-input v-model="names[index]" v-for="(name, index) in names" :key="index" filled label="Enter text here." />
        <div class="q-gutter-md q-mb-xl">
          <q-btn @click="shuffleLists" label="Shuffle" color="positive" rounded/>
          <q-btn @click="addName" label="Add List" color="dark" rounded/>
          <q-btn @click="restLists" label="Reset Lists" color="dark" rounded/>
        </div>
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
  @media (width < 600px) {
    margin-bottom: 0;
    font-size: 2.5rem;
    line-height: 1;
  }
}
</style>