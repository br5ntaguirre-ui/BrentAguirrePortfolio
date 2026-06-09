<template>
  <nav class="sticky top-0 z-50 glass border-b border-cyber-silver/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2 group">
          <div class="w-10 h-10 bg-gradient-cyber rounded-lg flex items-center justify-center group-hover:shadow-glow-purple transition-shadow">
            <span class="text-white font-bold text-lg">BA</span>
          </div>
          <span class="text-cyber-silver font-display font-bold hidden sm:inline">BRENT</span>
        </router-link>

        <!-- Navigation Links -->
        <div class="flex items-center space-x-1 sm:space-x-2">
          <router-link
            to="/"
            class="px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base transition-all duration-200 hover:bg-cyber-purple/20 hover:text-cyber-silver"
            :class="route.path === '/' ? 'text-cyber-purple bg-cyber-purple/10' : 'text-cyber-silver/70'"
          >
            Home
          </router-link>
          <router-link
            to="/about"
            class="px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base transition-all duration-200 hover:bg-cyber-purple/20 hover:text-cyber-silver"
            :class="route.path === '/about' ? 'text-cyber-purple bg-cyber-purple/10' : 'text-cyber-silver/70'"
          >
            About
          </router-link>
          <router-link
            to="/contact"
            class="px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base transition-all duration-200 hover:bg-cyber-purple/20 hover:text-cyber-silver"
            :class="route.path === '/contact' ? 'text-cyber-purple bg-cyber-purple/10' : 'text-cyber-silver/70'"
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
