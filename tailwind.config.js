module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#f75023',
        green: '#1cbe59',
        yellow: '#f0c45c',
      },
    },
  },
  plugins: [],
}
