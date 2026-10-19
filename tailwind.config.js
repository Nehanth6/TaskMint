/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#6546F5',
          purpleDark: '#5335E2',
          purpleLight: '#F1EEFE',
          electric: '#3157F5',
          mint: '#B7F3D0',
          mintLight: '#EEFBF4',
          yellow: '#FFE98A',
          yellowLight: '#FFF9DF',
          bg: '#FCFBFF',
          dark: '#111936',
          muted: '#64708A',
          border: '#E8ECF4',
          card: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(25, 20, 60, 0.06), 0 4px 10px -3px rgba(25, 20, 60, 0.03)',
        'card-hover': '0 20px 40px -10px rgba(101, 70, 245, 0.15), 0 8px 16px -4px rgba(25, 20, 60, 0.06)',
        'pill': '0 4px 14px rgba(101, 70, 245, 0.35)',
        'soft': '0 2px 10px rgba(0, 0, 0, 0.04)'
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}
