<template>
  <div class="todo-app">
    <h1>To-do List</h1>
    <input v-model="newTodo" placeholder="Add a new task" @keyup.enter="addTodo" />
    <button @click="addTodo">Add Task</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
          {{ todo.text }}
        </span>
        <button @click="toggleTodo(index)">
          {{ todo.completed ? 'Undo' : 'Complete' }}
        </button>
        <button @click="removeTodo(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const todos = ref([]);
    const newTodo = ref('');

    const addTodo = () => {
      if (newTodo.value.trim() !== '') {
        todos.value.push({ text: newTodo.value, completed: false });
        newTodo.value = '';
      }
    };

    const removeTodo = (index) => {
      todos.value.splice(index, 1);
    };

    const toggleTodo = (index) => {
      todos.value[index].completed = !todos.value[index].completed;
    };

    return {
      todos,
      newTodo,
      addTodo,
      removeTodo,
      toggleTodo
    };
  }
};
</script>

<style scoped>
.todo-app {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}
</style>





