const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}'
    ],
    darkMode: false,
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
            blueGray: colors.blueGray,
            teal: colors.teal,
            blue: colors.blue,
            indigo: colors.indigo,
            rose: colors.rose,
            purple: colors.purple
        },
        extend: {
            fontFamily: {
                sans: ['silkaregular', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
    ]
}
