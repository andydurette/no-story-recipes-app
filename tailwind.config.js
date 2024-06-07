const { plugin } = require("twrnc");

module.exports = {
  content: [
    "./screens/**/*.tsx",
    "./navigation/index.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      sans: ["System", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      primary: {
        100: "#f9d3b8",
        200: "#d26011",
        300: "#ac5125",
      },
      gray: {
        100: "#374151",
        200: "#212832",
        300: "#1b1f20",
      },
    },
    screens: {
      xs: "320px",
      sm: "375px",
      md: "640px",
      lg: "768px",
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        container: `px-5 pt-8`,
        jumbo: "text-5xl font-bold",
        heading1: "text-3xl font-bold",
        heading2: "text-xl font-bold",
        heading3: "text-lg font-bold",
        paragraph: "text-base font-sans text-black",
        smallParagraph: "text-sm font-sans text-black",
      });
    }),
  ],
};
