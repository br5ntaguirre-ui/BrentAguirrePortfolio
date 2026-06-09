<template>
  <div class="min-h-screen bg-cyber-dark py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="mb-12 animate-slide-up">
        <h1 class="text-5xl sm:text-6xl font-display font-bold mb-4">
          <span class="gradient-text">About Me</span>
        </h1>
        <p class="text-xl text-cyber-silver/80">Engineering student, digital creator, and builder</p>
      </div>

      <!-- Bio Section -->
      <div class="glass rounded-xl p-8 md:p-12 mb-12 animate-slide-up" style="animation-delay: 0.1s;">
        <h2 class="text-2xl font-bold text-cyber-silver mb-4">Who I Am</h2>
        <p class="text-cyber-silver/70 leading-relaxed mb-4">
          I'm Brent Aguirre, an engineering student passionate about creating digital experiences that matter. 
          My journey spans from building robust technical solutions to crafting compelling digital narratives.
        </p>
        <p class="text-cyber-silver/70 leading-relaxed">
          Beyond the code, I've built a strong presence in social media content creation—managing campaigns for student societies 
          and personal projects that have reached and inspired thousands. I believe in the power of combining technical excellence 
          with creative vision to build something truly impactful.
        </p>
      </div>

      <!-- Skills Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="glass rounded-xl p-8 animate-slide-up" style="animation-delay: 0.2s;">
          <h3 class="text-xl font-bold text-cyber-purple mb-6">Technical Skills</h3>
          <div class="space-y-3">
            <div
              v-for="skill in technicalSkills"
              :key="skill"
              class="px-4 py-2 bg-cyber-purple/20 rounded-lg text-cyber-silver text-sm"
            >
              {{ skill }}
            </div>
          </div>
        </div>

        <div class="glass rounded-xl p-8 animate-slide-up" style="animation-delay: 0.3s;">
          <h3 class="text-xl font-bold text-cyber-pink mb-6">Creative Skills</h3>
          <div class="space-y-3">
            <div
              v-for="skill in creativeSkills"
              :key="skill"
              class="px-4 py-2 bg-cyber-pink/20 rounded-lg text-cyber-silver text-sm"
            >
              {{ skill }}
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Section -->
      <div class="glass rounded-xl p-8 md:p-12 mb-12 animate-slide-up" style="animation-delay: 0.4s;">
        <h3 class="text-2xl font-bold text-cyber-silver mb-8">Experience</h3>
        <div class="space-y-8">
          <div
            v-for="exp in experience"
            :key="exp.id"
            class="border-l-2 border-cyber-purple pl-6 pb-6 last:pb-0"
          >
            <h4 class="text-lg font-bold text-cyber-silver">{{ exp.role }}</h4>
            <p class="text-cyber-purple text-sm font-semibold">{{ exp.company }}</p>
            <p class="text-cyber-silver/60 text-sm mb-2">{{ exp.period }}</p>
            <p class="text-cyber-silver/70">{{ exp.description }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center">
        <p class="text-cyber-silver/70 mb-6">Interested in collaborating or learning more?</p>
        <router-link to="/contact" class="inline-block px-8 py-3 bg-gradient-cyber rounded-lg text-white font-semibold hover:shadow-glow-purple transition-all">
          Get In Touch →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const technicalSkills = ref([
  'Vue.js / React',
  'TypeScript / JavaScript',
  'Python',
  'Web Design & UX',
  'Database Design',
  'API Development',
  'Git & Version Control',
  'Cloud Platforms'
])

const creativeSkills = ref([
  'Content Strategy',
  'Visual Design',
  'Video Editing',
  'Social Media Management',
  'Copywriting',
  'Brand Development',
  'Campaign Planning',
  'Audience Engagement'
])

const experience = ref([
  {
    id: 1,
    role: 'Engineering Student',
    company: 'Update with your school',
    period: 'Add your timeline',
    description: 'Edit src/views/About.vue to add your actual experience and achievements.'
  },
  {
    id: 2,
    role: 'Social Media Manager',
    company: 'Student Society - Your Organization',
    period: 'Add dates here',
    description: 'Built and managed successful digital campaigns, growing engagement and community presence.'
  },
  {
    id: 3,
    role: 'Content Creator',
    company: 'Personal Projects',
    period: 'Ongoing',
    description: 'Creating engaging content across multiple platforms, building personal brand and audience.'
  }
])
</script>

<style scoped>
</style>
