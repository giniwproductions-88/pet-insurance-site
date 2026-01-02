/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm, trustworthy palette
        brand: {
          50: '#fef7ee',
          100: '#fdedd3',
          200: '#f9d7a5',
          300: '#f5ba6d',
          400: '#f09432',
          500: '#ec7712',
          600: '#dd5c08',
          700: '#b74309',
          800: '#92360f',
          900: '#762f10',
        },
        forest: {
          50: '#f3faf3',
          100: '#e3f5e3',
          200: '#c8eac9',
          300: '#9dd89f',
          400: '#6bbe6f',
          500: '#46a34a',
          600: '#358539',
          700: '#2d6930',
          800: '#285429',
          900: '#234524',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}
