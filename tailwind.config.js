/** @type {import('tailwindcss').Config} */

var content = ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']

module.exports = {
  content,
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      backgroundImage: {
        'home-bg': "url('/src/_assets/home-bg.png')",
        home: "url('/src/_assets/home.png')",
        about: "url('/src/_assets/about.png')",
        product: "url('/src/_assets/product.png')",
        contact: "url('/src/_assets/contact.png')",
      },
      transitionTimingFunction: {
        'custom-in-out': 'cubic-bezier(1, -0.01, 0.09, 1)',
      },
    },
  },
  plugins: [require('postcss-import')],
}
