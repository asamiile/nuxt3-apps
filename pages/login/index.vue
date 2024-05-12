<script setup lang="ts">
const auth = useCookie('pokemon-auth')

console.log(auth)

function authenticate() {
  auth.value = '1f38d'
}

function logout() {
  auth.value = ''
}
</script>

<template>
  <h1>Login Page</h1>
  <button @click="authenticate">Login</button>
  <button @click="logout">Logout</button>
</template>