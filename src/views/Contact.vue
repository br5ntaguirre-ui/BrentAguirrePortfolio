<template>
  <div class="min-h-screen bg-cyber-dark py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto">
      <!-- Header -->
      <div class="mb-12 text-center animate-slide-up">
        <h1 class="text-5xl sm:text-6xl font-display font-bold mb-4">
          <span class="gradient-text">Let's Connect</span>
        </h1>
        <p class="text-xl text-cyber-silver/80">Have a project or idea? I'd love to hear from you.</p>
      </div>

      <!-- Contact Options -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <a href="mailto:contact@example.com" class="glass rounded-xl p-8 hover:shadow-glow-purple transition-all text-center group">
          <div class="text-4xl mb-4">📧</div>
          <h3 class="text-xl font-bold text-cyber-silver group-hover:text-cyber-purple transition mb-2">Email</h3>
          <p class="text-cyber-silver/60 text-sm">contact@example.com</p>
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="glass rounded-xl p-8 hover:shadow-glow-purple transition-all text-center group">
          <div class="text-4xl mb-4">🔗</div>
          <h3 class="text-xl font-bold text-cyber-silver group-hover:text-cyber-purple transition mb-2">LinkedIn</h3>
          <p class="text-cyber-silver/60 text-sm">Connect with me</p>
        </a>

        <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="glass rounded-xl p-8 hover:shadow-glow-purple transition-all text-center group">
          <div class="text-4xl mb-4">💻</div>
          <h3 class="text-xl font-bold text-cyber-silver group-hover:text-cyber-purple transition mb-2">GitHub</h3>
          <p class="text-cyber-silver/60 text-sm">Check out my code</p>
        </a>

        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="glass rounded-xl p-8 hover:shadow-glow-purple transition-all text-center group">
          <div class="text-4xl mb-4">📱</div>
          <h3 class="text-xl font-bold text-cyber-silver group-hover:text-cyber-purple transition mb-2">Instagram</h3>
          <p class="text-cyber-silver/60 text-sm">Follow my journey</p>
        </a>
      </div>

      <!-- Quick Message Form -->
      <div class="glass rounded-xl p-8 md:p-12 animate-slide-up" style="animation-delay: 0.1s;">
        <h2 class="text-2xl font-bold text-cyber-silver mb-6">Send a Quick Message</h2>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Name -->
          <div>
            <label for="name" class="block text-cyber-silver font-semibold mb-2">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Your name"
              class="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-silver/20 rounded-lg text-cyber-silver placeholder-cyber-silver/40 focus:outline-none focus:border-cyber-purple focus:ring-1 focus:ring-cyber-purple transition"
              required
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-cyber-silver font-semibold mb-2">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="your@email.com"
              class="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-silver/20 rounded-lg text-cyber-silver placeholder-cyber-silver/40 focus:outline-none focus:border-cyber-purple focus:ring-1 focus:ring-cyber-purple transition"
              required
            />
          </div>

          <!-- Subject -->
          <div>
            <label for="subject" class="block text-cyber-silver font-semibold mb-2">Subject</label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              placeholder="What's this about?"
              class="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-silver/20 rounded-lg text-cyber-silver placeholder-cyber-silver/40 focus:outline-none focus:border-cyber-purple focus:ring-1 focus:ring-cyber-purple transition"
              required
            />
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-cyber-silver font-semibold mb-2">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              placeholder="Tell me what's on your mind..."
              rows="5"
              class="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-silver/20 rounded-lg text-cyber-silver placeholder-cyber-silver/40 focus:outline-none focus:border-cyber-purple focus:ring-1 focus:ring-cyber-purple transition resize-none"
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full px-6 py-3 bg-gradient-cyber rounded-lg text-white font-semibold hover:shadow-glow-purple transition-all duration-200"
          >
            {{ submitted ? '✓ Message Sent!' : 'Send Message →' }}
          </button>
        </form>

        <p class="text-cyber-silver/60 text-sm mt-6 text-center">
          I typically respond within 24 hours. Looking forward to hearing from you!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  // For now, just show success message
  // In a real app, you'd send this to a backend or service
  submitted.value = true
  
  // Reset after 3 seconds
  setTimeout(() => {
    form.value = { name: '', email: '', subject: '', message: '' }
    submitted.value = false
  }, 3000)
}
</script>

<style scoped>
</style>
