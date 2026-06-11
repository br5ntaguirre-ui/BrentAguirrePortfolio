/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Y2K Maximalist Collage palette
        'amber': '#E8A020',
        'amber-dark': '#C87800',
        'cream': '#F0EDE8',
        'black': '#111111',
        'steel-blue': '#8AADBD',
        'steel-light': '#B5C9D6',
      },
      fontFamily: {
        'display': ['Barlow Condensed', 'Impact', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['9px', '1.1'],
        'sm': ['10px', '1.2'],
        'base': ['14px', '1.4'],
      },
      rotate: {
        '1': '1deg',
        '2': '2deg',
        '3': '3deg',
      },
    },
  },
  plugins: [],
}
