import { createApp } from 'vue';
import App from './App.vue'; // A fő Vue komponens betöltése
import './assets/styles.css'; // CSS betöltése

createApp(App).mount('#app');












/*


import { createApp, ref } from 'vue';

import './assets/styles.css'; // CSS betöltése



console.log("FUTOK")

// Alkalmazás komponensünk
const App = {
  setup() {
    // To-do lista állapota
    const todos = ref([]);           // Feladatok tárolása
    const newTodo = ref('');         // Új feladat szövege

    // Feladat hozzáadása a listához
    const addTodo = () => {
      if (newTodo.value.trim() !== '') {
        todos.value.push({ text: newTodo.value, completed: false });
        newTodo.value = '';  // Ürítsük ki a beviteli mezőt
      }
    };

    // Feladat eltávolítása
    const removeTodo = (index) => {
      todos.value.splice(index, 1);
    };

    // Feladat állapotának váltása (kész/nem kész)
    const toggleTodo = (index) => {
      todos.value[index].completed = !todos.value[index].completed;
    };

    // Visszaadjuk a szükséges adatokat és függvényeket a template-hez
    return {
      todos,
      newTodo,
      addTodo,
      removeTodo,
      toggleTodo
    };
  },

  // HTML szerkezet, ami a teendőket jeleníti meg
  template: `
    <div class="todo-app">
      <h1>To-do List</h1>

      <input 
        v-model="newTodo" 
        placeholder="Add a new task" 
        @keyup.enter="addTodo" />
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
  `
};

// Az alkalmazás inicializálása és a '#app' DOM elemhez való hozzárendelés
createApp(App).mount('#app');

/*
import { createApp } from 'vue';

const app = Vue.createApp({
    data() {
      return {
        premium: true,
        cart: []
      }
    },
    methods: {/*
      updateCart(id) {
        this.cart.push(id)
      } 
    }
  })

  */
