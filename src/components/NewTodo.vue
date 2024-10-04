<template>
  <div style="margin-bottom: 20px; margin-top:30px;">
    <input style="padding-left: 5px;" v-model="newTodo" placeholder="Add new task" />
    <button @click="submitTodo">Add Task</button>
  </div>
</template>

<script setup lang="ts">
  
  let newTodo = '';

  const emit = defineEmits(['add-todo']);

  const submitTodo = () => {
    if (newTodo) {
      emit('add-todo', newTodo);
      newTodo = '';
    }
  };
</script>


