/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        desaturatedRed: 'hsl(0, 36%, 70%)',
        softRed: 'hsl(0, 93%, 68%)',
        darkGrayRed: 'hsl(0, 6%, 24%)',
        bgGradientFrom: 'hsl(0, 0%, 100%)',
        bgGradientTo: 'hsl(0, 100%, 98%)',
        btnGradientFrom: 'hsl(0, 80%, 86%)',
        btnGradientTo: 'hsl(0, 74%, 74%)',
      },
      fontFamily: {
        josefinSans: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
