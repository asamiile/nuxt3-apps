<script setup lang="ts">
useHead({
  title: 'Shuffle the List'
})

interface Name {
  names: string;
}

const names = ref(['', '', '', '']);

// Add list
const addList = () => {
  names.value.push('');
}

// Remove List
const removeList = () => {
  names.value.pop();
}

// Shuffle the lists
const shuffleLists = () => {
  for (let i = names.value.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [names.value[i], names.value[j]] = [names.value[j], names.value[i]];
  }
}

// Reset lists
const restLists = () => {
  names.value = ['', '', '', '']
}

</script>

<template>
  <section>
    <h2 class="page-title text-center text-weight-bold q-mb-sm">Shuffle the List</h2>
    <p class="text-subtitle1 text-center q-mb-xl">
      Enter text and click <q-icon name="fas fa-shuffle" /> button.
    </p>

    <div class="row q-gutter-x-lg justify-center q-gutter-y-lg">

      <div class="q-mr-sm q-gutter-y-lg">
        <!-- add & remove buttons -->
        <div class="button-group items-start">
          <q-btn @click="shuffleLists" icon="fas fa-shuffle" flat>
            <q-tooltip class="bg-positive text-body2">
              Shuffle
            </q-tooltip> 
          </q-btn>           
          <q-btn @click="addList" icon="fas fa-plus" flat>
            <q-tooltip class="bg-positive text-body2">
              Add
            </q-tooltip> 
          </q-btn>           
          <q-btn @click="removeList" icon="fas fa-minus" flat>
            <q-tooltip class="bg-positive text-body2">
              Remove
            </q-tooltip> 
          </q-btn>
          <q-btn @click="restLists" icon="fas fa-rotate-left" flat>
            <q-tooltip class="bg-positive text-body2">
              Reset
            </q-tooltip> 
          </q-btn>           
        </div>
      </div>

      <div class="col-xs-11 col-md-4 q-gutter-y-lg">
        <!-- input -->
        <q-input v-model="names[index]" v-for="(name, index) in names" :key="index" filled label="Enter text here." />
      </div>

      <div class="col-xs-11 col-md-4 q-gutter-y-lg">
        <!-- list -->
        <q-card flat class="text-white bg-dark">
          <q-card-section style="min-height: 300px;">
            <ul class="list-index q-pl-md">
              <li v-for="(name, index) in names" :key="index" class="list-index-item text-weight-bold">
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
    line-height: 1.25;
  }
}

.button-group {
  display: flex;
  row-gap: 1.5rem;
  @media (1024px <= width) {
    flex-direction: column;
  }
}

.list-index {
  list-style: none;
}

.list-index-item {
  font-size: 1.25rem;
}

.list-index-item:not(:last-child) {
  margin-bottom: 0.5rem;
}
</style>