export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'HEADWORK',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Front-end tech playground & noise den.'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['@/assets/css/main.css'],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss'
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/content
        '@nuxt/content'
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Content module configuration (https://go.nuxtjs.dev/config-content)
    content: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: ['gsap']
    }
}
