<template>
  <div>
    <AppHeader />
    <main class="container py-4">
      <slot></slot>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default {
  name: "AppLayout",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>