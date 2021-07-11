module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      spacing: {
        "10/12": "16.666667%",
      },
      maxWidth: {
        xxs: "16rem",
      },
      colors: {
        night: {
          mare: {
            DEFAULT: "#141414",
            2: "#0C0C0C",
          },
          sky: {
            dawn: "#E0E0E0",
            noon: "#BDBDBD",
            dusk: "#828282",
          },
          hawk: {
            DEFAULT: "#1C1C1C",
            100: "#282828",
          },
        },
        mist: {
          DEFAULT: "#AE8BFF",
          2: "#8E5DFF",
          3: "#6E3DDF",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
