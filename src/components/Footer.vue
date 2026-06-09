<template>
  <footer class="bg-gradient-to-t from-cyber-dark via-cyber-dark/95 to-transparent border-t border-cyber-silver/20 py-12 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Social Links Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <!-- Socials -->
        <div>
          <h3 class="text-cyber-purple font-bold text-lg mb-4">Follow</h3>
          <div class="flex gap-4 flex-wrap">
            <a
              v-for="(link, platform) in socialLinks"
              :key="platform"
              :href="link"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 glass rounded-lg text-cyber-silver/70 hover:text-cyber-silver hover:shadow-glow-purple transition-all duration-200 capitalize text-sm"
            >
              {{ platform }}
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-cyber-purple font-bold text-lg mb-4">Navigate</h3>
          <nav class="space-y-2">
            <router-link to="/" class="block text-cyber-silver/70 hover:text-cyber-purple transition">Home</router-link>
            <router-link to="/about" class="block text-cyber-silver/70 hover:text-cyber-purple transition">About</router-link>
            <router-link to="/contact" class="block text-cyber-silver/70 hover:text-cyber-purple transition">Contact</router-link>
          </nav>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-cyber-purple font-bold text-lg mb-4">Get in Touch</h3>
          <p class="text-cyber-silver/70 text-sm">
            Have a project in mind? Let's collaborate and create something amazing.
          </p>
          <router-link to="/contact" class="inline-block mt-4 px-6 py-2 bg-gradient-cyber rounded-lg text-white font-semibold hover:shadow-glow-purple transition-all duration-200">
            Contact Me
          </router-link>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-cyber-silver/10 pt-8"></div>

      <!-- Bottom -->
      <div class="flex flex-col sm:flex-row items-center justify-between text-cyber-silver/50 text-sm">
        <p>&copy; 2026 Brent Aguirre. All rights reserved.</p>
        <p class="mt-4 sm:mt-0">Crafted with <span class="text-cyber-pink">❤</span> and Code</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const socialLinks = ref({
  instagram: '#',
  tiktok: '#',
  twitter: '#',
  github: '#',
  linkedin: '#'
})
</script>

<style scoped>
</style>
