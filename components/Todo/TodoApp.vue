<template>
  <div class="todo-app">
    <h2>To Do List</h2>
    <TodoForm />
    <TodoList />
  </div>
</template>

<script setup lang="ts">
import TodoForm from "~/components/Todo/TodoForm.vue";
import TodoList from "~/components/Todo/TodoList.vue";
</script>
