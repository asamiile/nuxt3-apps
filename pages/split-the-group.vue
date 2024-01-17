<script setup lang="ts">
useHead({
  title: 'Split the Group'
})

interface Name {
  names: string;
}

const names = ref(['', '', '', '']);
const teams = ref([[], []]);
const teamCount = ref(2);

// Grouping
const randomizeTeams = () => {

  // Reset Grouping
  teams.value = Array.from({length: teamCount.value}, () => []);

  let shuffledNames = [...names.value].sort(() => Math.random() - 0.5);
  const teamSize = Math.ceil(shuffledNames.length / teamCount.value);

  // Group by number of teams
  for (let i = 0; i < shuffledNames.length; i++) {
    teams.value[i % teamCount.value].push(shuffledNames[i]);
  }
  
}

// Add Name
const addList = () => {
  names.value.push('');
};

// Remove List
const removeList = () => {
  names.value.pop();
}

// Reset lists
const restLists = () => {
  names.value = ['', '', '', '']
  teamCount.value = 2;
  teams.value = Array.from({length: teamCount.value}, () => []);
}
</script>

<template>
  <section>
    <h2 class="page-title text-center text-weight-bold q-mb-sm">Split the Group</h2>
    <p class="text-subtitle1 text-center q-mb-xl">
      Enter Name and click <q-icon name="fas fa-people-group" /> button.
    </p>

    <div class="row q-gutter-x-lg justify-center q-gutter-y-lg">

      <div class="q-mr-sm q-gutter-y-lg">

        <!-- add & remove buttons -->
        <div class="button-group items-start">
          <q-btn @click="randomizeTeams" icon="fas fa-people-group" flat>
            <q-tooltip class="bg-positive text-body2">
              Grouping
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

        <!-- input Name -->
        <q-input v-model="names[index]" v-for="(name, index) in names" :key="index" filled label="Name here." />
      </div>

      <div class="col-xs-11 col-md-4 q-gutter-y-lg">

        <!-- list -->
        <q-card flat class="text-white bg-dark">
          <q-card-section style="min-height: 300px;">

            <!-- input count -->
            <div class="row team-count">
              <span class="text-weight-bold q-ml-md">Team Count:</span>
              <q-input v-model="teamCount" type="number" min="2" filled square color="secondary" style="max-width: 160px" class="team-count-input q-ml-md q-mt-sm" />
            </div>

            <hr class="list-divide q-mx-md q-my-md">

            <div class="team" v-for="(team, index) in teams" :key="index">
              <h3 class="list-title text-weight-bold q-ml-md">Team{{ index + 1 }}</h3>
              <ul>
                <li v-for="(name, index) in team" :key="index">{{ name }}</li>
              </ul>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

  </section>
</template>

<style scoped>
/* page title */
.page-title {
  @media (width < 600px) {
    margin-bottom: 0;
    font-size: 2.5rem;
    line-height: 1.25;
  }
}

/* button group */
.button-group {
  display: flex;
  row-gap: 1.5rem;
  @media (1024px <= width) {
    flex-direction: column;
  }
}

/* input count */
.team-count {
  align-items: baseline;
  font-size: 1.25rem;
}

.team-count-input :deep(input) {
  color: #ffffffe6;
  font-size: 1.25rem;
  font-weight: 700;
}

.list-divide {
  border-color: #b6b6b6;
}

/* list */
.list-index {
  list-style: none;
}

.list-index-item {
  font-size: 1.25rem;
}

.list-index-item:not(:last-child) {
  margin-bottom: 0.5rem;
}

/* List title */
.list-title {
  margin-bottom: 0;
  font-size: 1.25rem;
  line-height: 1.5;
}
</style>