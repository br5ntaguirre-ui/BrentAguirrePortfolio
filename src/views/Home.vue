<template>
  <div class="min-h-screen bg-cream">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Geometric background polygons -->
        <div class="absolute top-0 right-0 w-96 h-96 poly-amber opacity-10 z-0"></div>
        <div class="absolute bottom-20 left-0 w-80 h-80 poly-steel opacity-15 z-0 rotate-3"></div>

        <!-- Hero content -->
        <div class="relative z-10">
          <!-- Eyebrow -->
          <div class="eyebrow text-amber">• 001 — PORTFOLIO</div>

          <!-- Main heading -->
          <h1 class="display-xl text-black mb-6 transform -rotate-1">
            BRENT<br />AGUIRRE
          </h1>

          <!-- Subheading with dashed box -->
          <div class="dashed-box border-amber w-fit mb-12">
            <p class="text-black text-sm sm:text-base leading-relaxed max-w-xl">
              Engineering student with a focus on digital creation and community impact. 
              <br class="hidden sm:block" />
              <span class="font-bold">Placeholder for your about description here.</span>
            </p>
          </div>

          <!-- Section selector tabs -->
          <div class="flex flex-wrap gap-3 mb-12">
            <button
              v-for="section in sections"
              :key="section.id"
              @click="activeSection = section.id"
              class="section-tab"
              :class="activeSection === section.id ? 'active' : ''"
            >
              {{ section.label }}
            </button>
          </div>
        </div>
      </div>

      <!-- Dot matrix overlay -->
      <div class="dot-matrix"></div>
    </section>

    <!-- Content Sections -->
    <section class="relative py-20 px-4 bg-cream">
      <div class="max-w-7xl mx-auto">
        <!-- Personal Projects Section -->
        <div v-show="activeSection === 'personal'" class="animate-fade-in">
          <div class="eyebrow text-amber mb-8">• SECTION 001 — PERSONAL PROJECTS</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              v-for="project in personalProjects"
              :key="project.id"
              class="glass-panel p-6 transform hover:rotate-1 transition-transform"
            >
              <div class="aspect-video bg-steel-blue/20 mb-4 overflow-hidden">
                <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
              </div>
              <h3 class="text-lg font-bold text-black mb-2">{{ project.title }}</h3>
              <p class="text-sm text-black/70 mb-4">{{ project.description }}</p>
              <div class="flex gap-2 flex-wrap">
                <span v-for="tag in project.tags" :key="tag" class="mono-xs bg-amber/20 px-2 py-1">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- ESSS Spirit Director Section -->
        <div v-show="activeSection === 'esss'" class="animate-fade-in">
          <div class="eyebrow text-amber mb-8">• SECTION 002 — ESSS SPIRIT DIRECTOR</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              v-for="item in esssHighlights"
              :key="item.id"
              class="glass-panel p-6 transform hover:-rotate-1 transition-transform"
            >
              <div class="aspect-video bg-amber/10 mb-4 overflow-hidden">
                <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
              </div>
              <h3 class="text-lg font-bold text-black mb-2">{{ item.title }}</h3>
              <p class="text-sm text-black/70 mb-2">{{ item.description }}</p>
              <p class="mono-sm text-amber">ROLE: {{ item.role }}</p>
            </div>
          </div>
        </div>

        <!-- Instagram Section -->
        <div v-show="activeSection === 'instagram'" class="animate-fade-in">
          <div class="eyebrow text-amber mb-8">• SECTION 003 — INSTAGRAM: {{ instagramData.handle }}</div>
          <p class="text-black/70 mb-8 max-w-2xl">{{ instagramData.bio }}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              v-for="highlight in instagramData.highlights"
              :key="highlight.id"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              class="glass-panel overflow-hidden group cursor-pointer transform hover:scale-105 transition-transform"
            >
              <div class="aspect-square bg-steel-blue/20 overflow-hidden">
                <img :src="highlight.image" :alt="highlight.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div class="p-4">
                <h4 class="font-bold text-black text-sm">{{ highlight.title }}</h4>
                <p class="text-xs text-black/60">{{ highlight.description }}</p>
              </div>
            </a>
          </div>
          <div class="mt-12 text-center">
            <a
              href="https://instagram.com/1030kbt"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block section-tab"
            >
              Follow @1030kbt
            </a>
          </div>
        </div>
      </div>

      <!-- Dot matrix overlay -->
      <div class="dot-matrix"></div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-20 px-4 bg-black text-cream">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="display-lg text-amber mb-6">LET'S WORK<br />TOGETHER</h2>
        <p class="text-sm mb-8 leading-relaxed">
          Whether you're interested in my personal projects, ESSS initiatives, or just want to connect, 
          I'd love to hear from you.
        </p>
        <router-link to="/contact" class="inline-block section-tab bg-amber text-black border-amber hover:bg-amber-dark">
          Go to Contact →
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
}

interface ESSSItem {
  id: number
  title: string
  description: string
  image: string
  role: string
}

interface InstagramData {
  handle: string
  bio: string
  highlights: Array<{
    id: number
    title: string
    description: string
    image: string
  }>
}

const activeSection = ref('personal')

const sections = ref([
  { id: 'personal', label: 'Personal Projects' },
  { id: 'esss', label: 'ESSS Spirit Director' },
  { id: 'instagram', label: '@1030kbt' }
])

const personalProjects = ref<Project[]>([
  {
    id: 1,
    title: "Your Project Name",
    description: "Brief description of your personal project",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    tags: ["Tag1", "Tag2"],
    link: "#",
    github: "https://github.com"
  },
  {
    id: 2,
    title: "Another Project",
    description: "Another personal engineering project",
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop",
    tags: ["React", "TypeScript"],
    link: "#",
    github: "https://github.com"
  }
])

const esssHighlights = ref<ESSSItem[]>([
  {
    id: 1,
    title: "ESSS Event 1",
    description: "Your ESSS Spirit Director achievements and highlights",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    role: "Spirit Director"
  },
  {
    id: 2,
    title: "ESSS Campaign",
    description: "Society initiatives and community impact",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    role: "Spirit Director"
  }
])

const instagramData = ref<InstagramData>({
  handle: "@1030kbt",
  bio: "Your Instagram bio goes here - personal insights, creativity, and daily life",
  highlights: [
    {
      id: 1,
      title: "Highlight 1",
      description: "Your favorite Instagram moment",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Highlight 2",
      description: "Another favorite post",
      image: "https://images.unsplash.com/photo-1599050991474-8d9058a89716?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Highlight 3",
      description: "More of your content",
      image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=300&h=300&fit=crop"
    }
  ]
})

onMounted(() => {
  // Could load data from JSON files here
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-in;
}
</style>
