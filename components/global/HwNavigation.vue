<template>
    <div class="relative h-screen">
        <div class="fixed z-10 flex items-center w-32 h-screen bg-white">
            <div class="flex flex-col">
                <nuxt-link to="/"
                    class="text-gray-300 transition hover:text-gray-800">
                    Home
                </nuxt-link>
                <nuxt-link to="/portfolio"
                    class="text-gray-300 transition hover:text-gray-800">
                    Portfolio
                </nuxt-link>
                <nuxt-link to="/resume"
                    class="text-gray-300 transition hover:text-gray-800">
                    Resume
                </nuxt-link>
                <nuxt-link to="/playground"
                    class="text-gray-300 transition hover:text-gray-800">
                    Playground
                </nuxt-link>
                <nuxt-link to="/thoughts"
                    class="text-gray-300 transition hover:text-gray-800">
                    Thoughts
                </nuxt-link>
                <nuxt-link to="/noises"
                    class="text-gray-300 transition hover:text-gray-800">
                    Noises
                </nuxt-link>
            </div>
        </div>
        <button @click="toggleMainNav"
            class="fixed top-0 left-0 z-10 p-2 mt-8 text-white transition-all duration-300 ease-out bg-gray-800 focus:outline-none">
            toggle
        </button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        methods: {
            ...mapMutations({
                toggleMainNav: 'ui/toggleMainNav'
            })
        },
    }
</script>
