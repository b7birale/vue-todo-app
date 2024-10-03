<template>
  <AppLayout>
    <h1 class="text-center">To-Do App</h1>
    <NewTodo @add-todo="createTodo" />
    <TodoList :todos="todos" @delete-todo="deleteTodo" @mark-done="toggleTodoDone" />
  </AppLayout>
</template>

<script>
import { useTodoStore } from '../store/todoStore'; // Pinia store importálása
import NewTodo from '../components/NewTodo.vue';
import TodoList from '../components/TodoList.vue';
import AppLayout from '../components/AppLayout.vue';
import { computed } from 'vue';

export default {
  name: 'HomePage',
  components: {
    NewTodo,
    TodoList,
    AppLayout,
  },
  setup() {
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

    return {
      todos,
      createTodo,
      deleteTodo,
      toggleTodoDone,
    };
  },
};
</script>
