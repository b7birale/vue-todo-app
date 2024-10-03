import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [],
  }),
  actions: {
    // Index - Az összes todo lekérése
    getTodos() {
      return this.todos;
    },
    // Create - Új todo hozzáadása
    createTodo(todo) {
      this.todos.push({ text: todo, done: false });
    },
    // Update - Todo frissítése (pl. befejezés állapotának váltása)
    updateTodo(index, updatedTodo) {
      this.todos[index] = updatedTodo;
    },
    // Delete - Todo törlése
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
});
