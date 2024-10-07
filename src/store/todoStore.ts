import { defineStore } from 'pinia';

interface Todo {
  text: string;
  done: boolean;
}

/*
useTodoStore: This is a functional name that we use to call the store from other components.
This store is given a unique identifier called 'todoStore'.
DefineStore parameters consist of two main parts: state(állapot) and actions(metódusok).
*/
export const useTodoStore = defineStore('todoStore', {
  /*
  The state function specifies the default state of the store. In this case, it returns an 
  empty array called todos, which will contain the tasks (Todo type elements).
  (): It contains the input parameters (in this case there is no input parameter so it is empty)
  { todos: Todo[] } This part says the return type
  */
  state: (): { todos: Todo[] } => ({
    todos: [], // New object that contains an array that contains Todo type elements 
  }),
  actions: {
    // Index - Get all todos
    getTodos(): Todo[] {
      return this.todos;
    },
    // Create - Add new Todo
    createTodo(text: string) {
      this.todos.push({ text: text, done: false });
    },
    // Update - Update a Todo (e.g. done/undone)
    updateTodo(index: number, updatedTodo: Todo) {
      this.todos[index] = updatedTodo;
    },
    // Delete - Delete Todo
    deleteTodo(index: number) {
      this.todos.splice(index, 1);
    },
  },
});
