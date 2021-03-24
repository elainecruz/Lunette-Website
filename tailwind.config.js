module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: "#FAFAFA",
      purple: "#33065A",
      yellow: "#FEC314",
      black: "#070707",
      gray: "#C3BFBF",
    },
    fontFamily: {
      sans: ["Quicksand", "sans-serif"]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
