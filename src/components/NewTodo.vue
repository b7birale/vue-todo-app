<template>
  <div style="margin-bottom: 20px; margin-top:30px;">
    <!-- The v-model provides two-way data connection between the newTodoText variable and the input field.
    When the user types something, it automatically updates the newTodo variable and vice versa. -->
    <input style="padding-left: 5px;" v-model="newTodoText" placeholder="Add new task"/>
    <button @click="submitTodo">Add Task</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// reactive variable declaration
let newTodoText = ref(''); // Reactive string

/*
**defineEmits** is a Vue 3 specific API that allows a component to send events ("emits").
I define here a unique event called **add-todo**, which I send to the component's 
parent component (HomePage.vue) when I want to add a new task. That is needed because I define
the createTodo() method in the HomePage.vue, not here, so I cannot call this method here, but
only in the HomePage.vue

(Emit equals "emittál" in Hunagrian, which means "kibocsát, kisugároz")
*/
const emit = defineEmits(['add-todo']) 

const submitTodo = () => {
  if (newTodoText.value) {
    emit('add-todo', newTodoText.value);
    newTodoText.value  = ''; // Reset input after submission
  }
}
</script>


