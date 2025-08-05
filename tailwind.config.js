module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',    // all files in the app folder
    './components/**/*.{js,ts,jsx,tsx}' // if you have components folder
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#151312',
        light: {
          100: '#D6C6FF',
          200: '#A8B5DB',
          300: '#9CA4AB',
        },
        dark: {
          100: '#221f3d',
          200: '#0f0d23',
        },
      },
      accent: '#ABBBFF',
    },
  },
  plugins: [],
};
