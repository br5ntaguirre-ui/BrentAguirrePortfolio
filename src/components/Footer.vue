<template>
  <footer class="bg-black border-t-2 border-black py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <!-- Branding -->
        <div>
          <div class="display-lg text-amber mb-4">BRENT</div>
          <p class="text-cream text-sm leading-relaxed">
            Engineering student × Creator × Builder
          </p>
        </div>

        <!-- Quick Links -->
        <div class="text-right">
          <p class="mono-xs text-amber mb-4">•2026</p>
          <nav class="space-y-2 text-cream">
            <router-link to="/" class="block hover:text-amber transition text-sm">Home</router-link>
            <router-link to="/contact" class="block hover:text-amber transition text-sm">Contact</router-link>
          </nav>
        </div>
      </div>

      <div class="border-t border-amber pt-6 text-cream text-xs">
        <p>&copy; 2026. Built with Code & Creativity.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
