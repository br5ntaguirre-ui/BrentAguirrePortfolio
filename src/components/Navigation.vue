<template>
  <nav class="sticky top-0 z-50 bg-cream border-b-2 border-black">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Brand -->
        <router-link to="/" class="flex items-center">
          <div class="display-lg text-amber transform hover:rotate-1 transition-transform">BA</div>
        </router-link>

        <!-- Navigation Links -->
        <div class="flex items-center gap-2 sm:gap-4">
          <router-link
            to="/"
            class="section-tab"
            :class="route.path === '/' ? 'active' : ''"
          >
            Home
          </router-link>
          <router-link
            to="/contact"
            class="section-tab"
            :class="route.path === '/contact' ? 'active' : ''"
          >
            Contact
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
</style>
