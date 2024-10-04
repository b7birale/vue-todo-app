<template>
  <div>
    <AppHeader />
    <main class="container py-4">
      <slot></slot>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

</script>