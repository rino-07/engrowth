/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#d30306',
        'gray': '#898989',
        'action-green': '#0a8f42',
        'deep-navy': '#1a1a2e',
        'warm-white': '#fafafa',
        'light-gray': '#f5f5f5',
        'dark-gray': '#333333',
        'soft-gold': '#c9a961',
        'success': '#0a8f42',
        'warning': '#ffc107',
        'error': '#dc3545',
        'info': '#17a2b8',
      },
      fontFamily: {
        'serif': ['var(--font-serif)', 'serif'],
        'sans': ['var(--font-sans)', 'sans-serif'],
        'display': ['var(--font-display)', 'serif'],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
      },
      screens: {
        'sm': '768px',
        'md': '1200px',
        'lg': '1400px',
      },
    },
  },
  plugins: [],
}
