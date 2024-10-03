<template>
  <div class="new-todo">
    <input v-model="newTodo" placeholder="Add new todo" />
    <button @click="submitTodo">Add Todo</button>
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

<style scoped>
.new-todo {
  margin-bottom: 20px;
}
</style>
