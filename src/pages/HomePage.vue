<template>
  <AppLayout>
    <h1 class="text-center">To-Do App</h1>
    <NewTodo @add-todo="createTodo" />
    <TodoList :todos="todos" @delete-todo="deleteTodo" @mark-done="toggleTodoDone" />
  </AppLayout>
</template>

<script setup lang="ts">
import { useTodoStore } from '../store/todoStore'; // Pinia store importálása
import NewTodo from '../components/NewTodo.vue';
import TodoList from '../components/TodoList.vue';
import AppLayout from '../components/AppLayout.vue';
import { computed } from 'vue';

const todoStore = useTodoStore();

// A store state-hez való hozzáférés
const todos = computed(() => todoStore.getTodos());

// CRUD műveletek hívása a store-on keresztül
const createTodo = (todo) => {
  todoStore.createTodo(todo);
};

const deleteTodo = (index) => {
  todoStore.deleteTodo(index);
};

const toggleTodoDone = (index) => {
  const todo = todoStore.todos[index];
  todoStore.updateTodo(index, { ...todo, done: !todo.done });
};

</script>
