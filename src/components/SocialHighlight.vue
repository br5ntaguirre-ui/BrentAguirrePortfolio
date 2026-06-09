<template>
  <div class="glass rounded-xl overflow-hidden hover:shadow-glow-pink transition-all duration-300 transform hover:-translate-y-1">
    <!-- Image -->
    <div class="aspect-video overflow-hidden bg-cyber-dark">
      <img 
        :src="highlight.image"
        :alt="highlight.title"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

    <!-- Content -->
    <div class="p-4">
      <!-- Platform Badge -->
      <div class="flex items-center justify-between mb-2">
        <span class="px-2 py-1 bg-cyber-pink/20 rounded text-cyber-pink text-xs font-semibold capitalize">
          {{ highlight.platform }}
        </span>
        <span
          v-if="highlight.type"
          class="px-2 py-1 rounded text-xs"
          :class="highlight.type === 'society' ? 'bg-cyber-purple/20 text-cyber-purple' : 'bg-cyber-teal/20 text-cyber-teal'"
        >
          {{ highlight.type }}
        </span>
      </div>

      <!-- Title & Description -->
      <h3 class="font-bold text-cyber-silver mb-2">{{ highlight.title }}</h3>
      <p class="text-cyber-silver/60 text-sm line-clamp-2">{{ highlight.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SocialHighlight {
  platform: string
  title: string
  description: string
  image: string
  type?: 'society' | 'personal'
}

defineProps<{
  highlight: SocialHighlight
}>()
</script>

<style scoped>
</style>
