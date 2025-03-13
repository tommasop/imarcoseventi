/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'band-primary': '#1a1a1a',
        'band-accent': '#ff3366'
      }
    }
  },
  plugins: []
}