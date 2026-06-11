<template>
  <div class="min-h-screen bg-cream py-20 px-4">
    <div class="max-w-2xl mx-auto">
      <!-- Header Section -->
      <section class="relative overflow-hidden mb-16">
        <!-- Geometric background -->
        <div class="absolute -top-20 -right-20 w-80 h-80 poly-amber opacity-5 z-0"></div>
        <div class="absolute -bottom-20 -left-20 w-60 h-60 poly-steel opacity-10 z-0 rotate-2"></div>

        <div class="relative z-10">
          <div class="eyebrow text-amber mb-4">• 002 — GET IN TOUCH</div>
          <h1 class="display-lg text-black mb-6 transform rotate-1">LET'S TALK</h1>
          
          <div class="dashed-box border-amber w-fit mb-8">
            <p class="text-black text-sm leading-relaxed max-w-lg">
              Have a question, idea, or just want to say hello? Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>
        </div>

        <div class="dot-matrix"></div>
      </section>

      <!-- Contact Form -->
      <form @submit.prevent="handleSubmit" class="relative z-10">
        <div class="glass-panel p-8 md:p-12">
          <!-- Name Field -->
          <div class="mb-8">
            <label for="name" class="block eyebrow text-amber mb-3">NAME</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Your full name"
              class="w-full px-4 py-3 bg-cream border-2 border-black text-black placeholder-black/40 focus:outline-none focus:border-amber transition text-sm"
              required
            />
          </div>

          <!-- Email Field -->
          <div class="mb-8">
            <label for="email" class="block eyebrow text-amber mb-3">EMAIL</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="your@email.com"
              class="w-full px-4 py-3 bg-cream border-2 border-black text-black placeholder-black/40 focus:outline-none focus:border-amber transition text-sm"
              required
            />
          </div>

          <!-- Message Field -->
          <div class="mb-8">
            <label for="message" class="block eyebrow text-amber mb-3">MESSAGE</label>
            <textarea
              id="message"
              v-model="form.message"
              placeholder="What's on your mind? (No character limit, but keep it real)"
              rows="6"
              class="w-full px-4 py-3 bg-cream border-2 border-black text-black placeholder-black/40 focus:outline-none focus:border-amber transition text-sm resize-none"
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="section-tab w-full bg-amber text-black border-amber hover:bg-amber-dark disabled:opacity-50"
          >
            {{ isSubmitting ? 'SENDING...' : submitted ? '✓ SENT!' : 'SEND MESSAGE →' }}
          </button>

          <!-- Success Message -->
          <p v-if="submitted" class="text-sm text-amber mt-6 text-center">
            Thanks for reaching out! I'll get back to you soon.
          </p>
        </div>
      </form>

      <!-- Footer Note -->
      <div class="mt-12 text-center">
        <p class="text-xs text-black/50 mb-4">
          No automatic replies here. Just genuine human responses.
        </p>
        <div class="flex justify-center gap-4">
          <router-link to="/" class="text-amber hover:text-amber-dark transition text-sm font-bold">
            ← Back to Home
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ContactForm {
  name: string
  email: string
  message: string
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)
const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate sending (in production, this would call a backend API)
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  submitted.value = true
  isSubmitting.value = false
  
  // Reset form after 3 seconds
  setTimeout(() => {
    form.value = { name: '', email: '', message: '' }
    submitted.value = false
  }, 3000)
}
</script>

<style scoped>
</style>
