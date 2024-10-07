<template>
  <ul class="todo-list">
    <!-- With the v-for directive, I iterate through each **todo** element in the **todos** array,
    and put each of them into their own **li** tag. :key="index" gives a unique identifier to each li,
    helps Vue handle DOM updates. -->
    <li v-for="(todo, index) in todos" :key="index">
      <!-- The classes here change dynamically with the **:class** directive.
      It gets the **done** class if the value of **todo.done** is true -->
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="$emit('delete-todo', index)">Delete</button>
      <button @click="$emit('mark-done', index)">
        {{ todo.done ? 'Undo' : 'Done' }}
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">


//I import the defineProps function from Vue, which I use to define properties (props) for the component.
import { defineProps } from "vue";


//This interface defines the props accepted by this(TodoList) component.
//In this case, there is only one prop called **todos**, which is an Array<any>.
interface TodoListProps {
  todos: Array<any>;
}


/* We call the imported function. This line specifies that the component accepts a prop called todos,
which is typed based on the previously defined interface. */
defineProps<TodoListProps>();

</script>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
}
.todo-list li {
  margin: 5px 0;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}
.todo-list li .done {
  text-decoration: line-through;
  color: gray;
}
</style>
