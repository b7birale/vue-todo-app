import { defineStore } from 'pinia';

export interface TodoDTO {
  text: string;
  done: boolean;
};

interface TodoStore {
  todos: TodoDTO[];
}

export const useTodoStore = defineStore('todoStore', {
  state: (): TodoStore => ({
    todos: [],
  }),
  actions: {
    // Index - Az összes todo lekérése
    getTodos() {
      return this.todos;
    },
    // Create - Új todo hozzáadása
    createTodo(text: string) {
      this.todos.push({ text: text, done: false });
    },
    // Update - Todo frissítése (pl. befejezés állapotának váltása)
    updateTodo(index: number, updatedTodo: TodoDTO) {
      this.todos[index] = updatedTodo;
    },
    // Delete - Todo törlése
    deleteTodo(index: number) {
      this.todos.splice(index, 1);
    },
  },
});
