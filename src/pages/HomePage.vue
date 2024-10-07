<template>
  <AppLayout>
    <h1 class="text-center">To-Do App</h1>
    <NewTodo @add-todo="createTodo" />
    <!--
      :todos="todos" means that the tasks are passed to the component from the variable called todos.
    -->
    <TodoList :todos="todos" @delete-todo="deleteTodo" @mark-done="toggleTodoDone" />
  </AppLayout>
</template>

<script setup lang="ts">
import { useTodoStore } from '../store/todoStore'; // Import Pinia store
import NewTodo from '../components/NewTodo.vue';
import TodoList from '../components/TodoList.vue';
import AppLayout from '../components/AppLayout.vue';
import { computed } from 'vue';

/*
Call useTodoStore() method that is definied in store/todoStore.js
This cointains the list of existing todos and all the CRUD methods.
Therefore, from this point you can call any of the methods using the variable todoStore (that is definied here)
Example: todoStore.createTodo, todoStore.getTodos() -> return with the list of the tasks
*/
const todoStore = useTodoStore();

// Access to store state
/* **computed()** is a function that allows you to create derived data that automatically updates when
the data associated with it changes. **computed()** is cached by default, which means it only
updates itself when its associated dependencies change. */
const todos = computed(() => todoStore.getTodos());

const deleteTodo = (index: number) => {
  todoStore.deleteTodo(index);
};

const createTodo = (text: string) => {
todoStore.createTodo(text);
};

//toggle means "kapcsoló" in Hunagrian
/*
{ ...todo, done: !todo.done } It makes a brand new Todo object
... is the spread opreator. It expand all the properties of an object inside another object.
*/
const toggleTodoDone = (index: number) => {
  const todo = todoStore.todos[index];
  todoStore.updateTodo(index, { ...todo, done: !todo.done });
};


</script>
