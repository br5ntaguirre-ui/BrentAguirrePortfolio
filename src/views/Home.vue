<template>
  <div class="min-h-screen bg-cyber-dark">
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Background Elements -->
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute bottom-10 right-1/4 w-80 h-80 bg-cyber-pink/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1s;"></div>

        <div class="relative z-10">
          <div class="text-center mb-12 animate-slide-up">
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-4">
              <span class="gradient-text">Brent Aguirre</span>
            </h1>
            <p class="text-xl sm:text-2xl text-cyber-silver/80 mb-6">
              Engineering Student × Digital Creator × Builder
            </p>
            <p class="text-cyber-silver/60 max-w-2xl mx-auto text-lg mb-8">
              Crafting digital experiences at the intersection of engineering and creativity. From real projects to viral campaigns.
            </p>
            <router-link to="/contact" class="inline-block px-8 py-3 bg-gradient-cyber rounded-lg text-white font-semibold hover:shadow-glow-purple transition-all duration-200">
              Let's Collaborate →
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark/50">
      <div class="max-w-7xl mx-auto">
        <div class="mb-16 animate-slide-up">
          <h2 class="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span class="gradient-text">Engineering Projects</span>
          </h2>
          <p class="text-cyber-silver/70 text-lg">Showcasing my work and technical journey</p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
          />
        </div>

        <!-- View All CTA -->
        <div v-if="projects.length > 6" class="text-center">
          <p class="text-cyber-silver/60 mb-4">More projects coming soon...</p>
        </div>
      </div>
    </section>

    <!-- Social Media Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="mb-16 animate-slide-up">
          <h2 class="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span class="gradient-text">Social Impact</span>
          </h2>
          <p class="text-cyber-silver/70 text-lg">Curated highlights from my digital work</p>
        </div>

        <!-- Highlights Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <SocialHighlight
            v-for="(highlight, idx) in socialHighlights"
            :key="idx"
            :highlight="highlight"
          />
        </div>

        <!-- Social Links -->
        <div class="glass rounded-xl p-8 text-center">
          <h3 class="text-2xl font-bold text-cyber-silver mb-6">Follow My Journey</h3>
          <div class="flex gap-4 justify-center flex-wrap">
            <a
              v-for="(link, platform) in socialLinks"
              :key="platform"
              :href="link"
              target="_blank"
              rel="noopener noreferrer"
              class="px-6 py-3 bg-cyber-purple/30 hover:bg-cyber-purple rounded-lg text-cyber-silver font-semibold hover:shadow-glow-purple transition-all capitalize"
            >
              {{ platform }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto glass rounded-xl p-12 text-center">
        <h2 class="text-3xl font-bold text-cyber-silver mb-4">Ready to Build Something?</h2>
        <p class="text-cyber-silver/70 mb-8 text-lg">
          Whether it's a engineering project, collaborative campaign, or passion project, let's create together.
        </p>
        <router-link to="/contact" class="inline-block px-8 py-3 bg-gradient-cyber rounded-lg text-white font-semibold hover:shadow-glow-purple transition-all">
          Start a Conversation →
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import SocialHighlight from '@/components/SocialHighlight.vue'

const projects = ref([
  {
    id: 1,
    title: "Your First Project",
    description: "Add your engineering projects here. Edit src/data/projects.json",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    tags: ["Add", "Your", "Tags"],
    link: "#",
    github: "https://github.com"
  },
  {
    id: 2,
    title: "Your Second Project",
    description: "These are placeholder projects. Replace with your actual work.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop",
    tags: ["More", "Tags", "Here"],
    link: "#",
    github: "https://github.com"
  },
  {
    id: 3,
    title: "Build Something Awesome",
    description: "Share your portfolio! Add images to public/images/ and update JSON files.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    tags: ["Your", "Work", "Shines"],
    link: "#",
    github: "https://github.com"
  }
])

const socialHighlights = ref([
  {
    platform: "instagram",
    title: "Society Campaign",
    description: "Add your social media highlights here. Edit src/data/socialMedia.json",
    image: "https://images.unsplash.com/photo-1599050991474-8d9058a89716?w=300&h=300&fit=crop",
    type: "society" as const
  },
  {
    platform: "tiktok",
    title: "Your Trending Post",
    description: "Replace placeholder images with your actual social media content.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=300&fit=crop",
    type: "personal" as const
  },
  {
    platform: "instagram",
    title: "Creative Highlight",
    description: "Showcase your impact and creativity across platforms.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=300&h=300&fit=crop",
    type: "personal" as const
  }
])

const socialLinks = ref({
  instagram: "#",
  tiktok: "#",
  twitter: "#",
  github: "https://github.com"
})
</script>

<style scoped>
</style>
