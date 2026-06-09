<template>
  <div class="glass rounded-xl overflow-hidden hover:shadow-glow-purple transition-all duration-300 transform hover:-translate-y-1 group">
    <!-- Image Container -->
    <div class="relative aspect-video overflow-hidden bg-cyber-dark">
      <img 
        :src="project.image" 
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-cyber-silver mb-2 group-hover:text-cyber-purple transition">
        {{ project.title }}
      </h3>
      <p class="text-cyber-silver/70 text-sm mb-4 line-clamp-2">
        {{ project.description }}
      </p>

      <!-- Tags -->
      <div class="flex gap-2 mb-4 flex-wrap">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="px-2 py-1 bg-cyber-purple/20 rounded text-cyber-purple text-xs"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Links -->
      <div class="flex gap-3">
        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 px-4 py-2 bg-cyber-purple/30 hover:bg-cyber-purple rounded-lg text-cyber-silver text-center text-sm transition"
        >
          View
        </a>
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 px-4 py-2 bg-cyber-pink/30 hover:bg-cyber-pink rounded-lg text-cyber-silver text-center text-sm transition"
        >
          Code
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
}

defineProps<{
  project: Project
}>()
</script>

<style scoped>
</style>
