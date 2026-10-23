/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: 'var(--color-accent, #2563eb)',
          dark: 'var(--color-accent-dark, #4f8ef7)',
        },
      },
    },
  },
  plugins: [],
}
