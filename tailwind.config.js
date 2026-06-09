/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Y2K/Cybercore palette
        'cyber-purple': '#a020f0',
        'cyber-pink': '#ff10f0',
        'cyber-blue': '#00d4ff',
        'cyber-teal': '#00ffcc',
        'cyber-silver': '#e8e8f0',
        'cyber-dark': '#0a0e27',
        'gloss-light': '#f5f5ff',
      },
      fontFamily: {
        'display': ['Courier Prime', 'monospace'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #a020f0 0%, #ff10f0 50%, #00d4ff 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(160, 32, 240, 0.1) 0%, rgba(255, 16, 240, 0.1) 100%)',
      },
      backdropBlur: {
        'glass': '10px',
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(160, 32, 240, 0.5)',
        'glow-pink': '0 0 20px rgba(255, 16, 240, 0.5)',
        'glow-cyan': '0 0 20px rgba(0, 212, 255, 0.5)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(160, 32, 240, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 16, 240, 0.8)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { transform: 'translateY(20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
