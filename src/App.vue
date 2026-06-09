<template>
  <div class="min-h-screen bg-cyber-dark flex flex-col">
    <Navigation />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
</style>
