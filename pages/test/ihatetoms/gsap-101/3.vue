<template>
    <div class="flex flex-col items-center justify-center w-full text-center">
        <NuxtLink to="/test/ihatetoms/gsap-101" class="absolute top-0 mt-6 text-gray-400 transition hover:text-gray-800">
            back
        </NuxtLink>
        <h1 class="font-semibold text-gray-300">GSAP 101</h1>
        <h2 class="px-6 py-1 mt-2 text-sm text-gray-500 bg-gray-300 rounded-full">2. Timelines</h2>

    </div>
</template>

<script>
    import gsap from 'gsap'
    import resolveConfig from 'tailwindcss/resolveConfig'
    import tailwindConfig from '@/tailwind.config.js'

    export default {
        transition: 'fade',

        mounted() {
            this.twConfig = resolveConfig(tailwindConfig)
        }
    }
</script>
