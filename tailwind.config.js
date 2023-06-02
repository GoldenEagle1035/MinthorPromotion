module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        'glowing': {
          '0%': {
            backgroundColor: '#800080',
            boxShadow: '0 0 5px #800080, 0 0 10px #800080, 0 0 15px #800080, 0 0 20px #800080',
          },
          '50%': {
            backgroundColor: '#e600e6',
            boxShadow: '0 0 5px #e600e6, 0 0 10px #e600e6, 0 0 15px #e600e6, 0 0 20px #e600e6',
          },
          '100%': {
            backgroundColor: '#800080',
            boxShadow: '0 0 5px #800080, 0 0 10px #800080, 0 0 15px #800080, 0 0 20px #800080',
          },
        },
      },
    },
  },
  plugins: [],
};
