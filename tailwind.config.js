/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'primary-dark': '#2d3748',
          'primary-darker': '#1a202c',
          'text-primary': '#2d3748',
          'text-secondary': '#4a5568',
          'background-light': '#f9f9f9',
          'border-light': '#e2e8f0',
        },
        spacing: {
          'xs': '0.25rem',
          'sm': '0.5rem', 
          'md': '1rem',
          'lg': '1.5rem',
          'xl': '2rem',
          '2xl': '3rem',
          '3xl': '4rem',
          '4xl': '6rem',
        },
        borderRadius: {
          'sm': '8px',
          'md': '12px', 
          'lg': '16px',
          'xl': '20px',
          '2xl': '24px',
        },
        boxShadow: {
          'light': '0px 10px 20px 5px rgba(0, 0, 0, 0.05)',
          'medium': '0px 10px 20px 5px rgba(0, 0, 0, 0.1)', 
          'heavy': '0 12px 24px rgba(0, 0, 0, 0.12)',
        },
      },
    },
    plugins: [],
  }