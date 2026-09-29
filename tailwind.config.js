/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        a1: 'rgb(var(--c1) / <alpha-value>)',
        a2: 'rgb(var(--c2) / <alpha-value>)',
        line: 'rgb(var(--fg) / 0.12)',
      },
      fontFamily: { display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'], sans: ['Manrope', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
