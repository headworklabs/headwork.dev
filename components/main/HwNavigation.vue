<template>
    <div id="navWrapper"
        class="relative h-screen"
        @mouseenter="toggleMainNav(true)"
        @mouseleave="toggleMainNav(false)">
        <div class="fixed z-10 flex items-center w-32 h-screen bg-white">
            <div ref="navTransitionGroup"
                class="transform -translate-x-full group">
                <NuxtLink to="/"
                    class="block text-gray-800 transition-opacity nav-item group-hover:opacity-50 hover:opacity-100">
                    Home
                </NuxtLink>
                <NuxtLink to="/portfolio"
                    class="block text-gray-800 transition-opacity nav-item group-hover:opacity-50 hover:opacity-100">
                    Portfolio
                </NuxtLink>
                <NuxtLink to="/resume"
                    class="block text-gray-800 transition-opacity nav-item group-hover:opacity-50 hover:opacity-100">
                    Resume
                </NuxtLink>
                <NuxtLink to="/playground"
                    class="block text-gray-800 transition-opacity nav-item group-hover:opacity-50 hover:opacity-100">
                    Playground
                </NuxtLink>
                <NuxtLink to="/thoughts"
                    class="block text-gray-800 transition-opacity nav-item group-hover:opacity-50 hover:opacity-100">
                    Thoughts
                </NuxtLink>
                <NuxtLink to="/noises"
                    class="block text-gray-800 transition-opacity nav-item group-hover:opacity-50 hover:opacity-100">
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
    import { gsap } from 'gsap'
    import { mapMutations } from 'vuex'

    export default {
        mounted() {
            // $refs should be available in mounted but logic could cause issue!?
            // https://forum.vuejs.org/t/solved-this-refs-key-returns-undefined-when-it-really-is/1226/11
            this.$nextTick(() => this.onToggleMutation())
        },

        methods: {
            ...mapMutations({
                toggleMainNav: 'ui/toggleMainNav'
            }),

            onToggleMutation() {
                this.unsubscribe = this.$store.subscribe((mutation, state) => {
                    if (mutation.type === 'ui/toggleMainNav') {
                        // Don't mix Tailwind transform transitions with GSAP elements
                        // You can use simple CSS transitions (opacity, colour etc.)
                        // https://greensock.com/forums/topic/24704-hover-effect-at-css-with-gsap/
                        gsap.fromTo(this.$refs.navTransitionGroup.children,
                            {
                                duration: state.ui.mainNavOpen ? 0 : 0.15,
                                stagger: state.ui.mainNavOpen ? 0 : 0.05,
                                x: -this.$refs.navTransitionGroup.offsetWidth
                            },
                            {
                                duration: state.ui.mainNavOpen ? 0.15 : 0,
                                stagger: state.ui.mainNavOpen ? 0.05 : 0,
                                x: this.$refs.navTransitionGroup.offsetWidth
                            }
                        )
                    }
                })
            },

            beforeDestroy() {
                this.unsubscribe()
            }
        },
    }
</script>

<style>
    .hover\:opacity-100:hover { opacity: 1 !important }
</style>
