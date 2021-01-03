const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
        fontFamily: {
            sans: ['silkaregular', ...defaultTheme.fontFamily.sans],
        },
    },
  },
  variants: {},
  plugins: [],
}
