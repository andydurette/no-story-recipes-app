const { plugin } = require('twrnc');

module.exports = {
  content: ['./screens/**/*.tsx', './navigation/index.tsx', './components/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['System', 'sans-serif'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      tang: "#d26011",
      "dark-tang": "#ac5125",
      "light-grey": "#374151",
      "medium-grey": "#212832",
      "heavy-grey": "#1b1f20",
    },
    screens: {
      xs: '320px',
      sm: '375px',
      md: '640px',
      lg: '768px',
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        container: `px-5 pt-8`,
        jumbo: 'text-5xl font-bold',
        heading1: 'text-3xl font-bold',
        heading2: 'text-xl font-bold',
        heading3: 'text-lg font-bold',
        paragraph: 'text-base font-sans text-black',
        smallParagraph: 'text-sm font-sans text-black',
      });
    }),
  ],
};
