module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        144: '36rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
