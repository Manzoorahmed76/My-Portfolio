module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      quicksand: ['Quicksand', 'sans-serif'],
      firacode: ['Fira Code', 'monospace'],
    },
    extend: {
      backgroundImage: {
        'bg-1': "url('/aico-creative.png')",
        'bg-2': "url('/netflix-clone.png')",
        'bg-3': "url('/airbnb-clone.png')",
        'bg-4': "url('/google-clone.png')",
        'bg-5': "url('/amazon-clone.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
