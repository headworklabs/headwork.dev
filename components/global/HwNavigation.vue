<template>
    <div id="navWrapper"
        class="relative h-screen"
        @mouseenter="toggleMainNav(true)"
        @mouseleave="toggleMainNav(false)">
        <div class="fixed z-10 flex items-center w-32 h-screen bg-white">
            <div id="navTransitionGroup"
                class="group">
                <NuxtLink to="/"
                    class="block text-gray-800 transition group-hover:opacity-50 hover:opacity-100">
                    Home
                </NuxtLink>
                <NuxtLink to="/portfolio"
                    class="block text-gray-800 transition group-hover:opacity-50 hover:opacity-100">
                    Portfolio
                </NuxtLink>
                <NuxtLink to="/resume"
                    class="block text-gray-800 transition group-hover:opacity-50 hover:opacity-100">
                    Resume
                </NuxtLink>
                <NuxtLink to="/playground"
                    class="block text-gray-800 transition group-hover:opacity-50 hover:opacity-100">
                    Playground
                </NuxtLink>
                <NuxtLink to="/thoughts"
                    class="block text-gray-800 transition group-hover:opacity-50 hover:opacity-100">
                    Thoughts
                </NuxtLink>
                <NuxtLink to="/noises"
                    class="block text-gray-800 transition group-hover:opacity-50 hover:opacity-100">
                    Noises
                </NuxtLink>
            </div>
        </div>
        <button @click="toggleMainNav"
            class="fixed top-0 left-0 z-10 p-2 mt-8 text-white bg-gray-800 focus:outline-none">
            <svg viewBox="0 0 44 23"
                fill="none"
                class="w-8 transition transform"
                :class="$store.state.ui.mainNavOpen ? 'rotate-180' : ''">
                <path d="M0 11.5L29.3374 11.5" stroke="#6B7280" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                <path d="M29.3374 20.5375V2.4624L41.99 11.4999L29.3374 20.5375Z" stroke="#6B7280" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
            </svg>
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

<style scoped >
    .hover\:opacity-100:hover { opacity: 1 !important }
</style>
