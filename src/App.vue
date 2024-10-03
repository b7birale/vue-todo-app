<template>
  <AppLayout>
    <!-- Itt a to-do list tartalma, amit korábban az App.vue-ba tettünk -->
    <div class="todo-app">
      <h2>Your To Do List</h2>
      <ul class="list-group">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          v-for="(todo, index) in todos"
          :key="index"
        >
          <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
            {{ todo.text }}
          </span>
          <div>
            <button class="btn btn-secondary btn-sm" @click="toggleTodo(index)">
              {{ todo.completed ? 'Undo' : 'Complete' }}
            </button>
            <button class="btn btn-danger btn-sm" @click="removeTodo(index)">Delete</button>
          </div>
        </li>
      </ul>
      <div class="input-group mt-3">
        <input
          v-model="newTodo"
          type="text"
          class="form-control"
          placeholder="Add a new task"
          @keyup.enter="addTodo"
        />
        <div class="input-group-append">
          <button class="btn btn-primary" @click="addTodo">Add Task</button>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from './components/AppLayout.vue';
import { ref } from 'vue';

export default {
  name: "App",
  components: {
    AppLayout,
  },
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
      toggleTodo,
    };
  },
};
</script>

<style scoped>
.todo-app {
  max-width: 600px;
  margin: 0 auto;
}
</style>