<template>
  <ul class="todo-list">
    <li v-for="(todo, index) in todos" :key="index">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="$emit('delete-todo', index)">Delete</button>
      <button @click="$emit('mark-done', index)">
        {{ todo.done ? 'Undo' : 'Done' }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
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
