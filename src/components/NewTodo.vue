<template>
  <div style="margin-bottom: 20px;">
    <input v-model="newTodo" placeholder="Add new task" />
    <button @click="submitTodo">Add Task</button>
  </div>
</template>

<script>
export default {
  name: 'NewTodo',
  data() {
    return {
      newTodo: '',
    };
  },
  methods: {
    submitTodo() {
      if (this.newTodo) {
        this.$emit('add-todo', this.newTodo);
        this.newTodo = ''; // Reset input after submission
      }
    },
  },
};
</script>


