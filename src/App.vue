<template>
  <div>
    <AppHeader />
      <main class="container py-4">
        <router-view />
      </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

