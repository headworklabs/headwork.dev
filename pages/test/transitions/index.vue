<template>
    <div class="flex flex-col items-center justify-center w-full text-center">
        <NuxtLink to="/test" class="absolute top-0 mt-6 text-gray-400 transition hover:text-gray-800">
            back
        </NuxtLink>
        <h1 class="font-semibold text-gray-300">
            <a href="https://nuxtjs.org/docs/2.x/features/transitions" target="_blank">NUXT TRANSITIONS</a>
        </h1>
        <nav class="mt-6">
            <NuxtLink to="/test/transitions/css"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                Basic CSS
            </NuxtLink>
            <NuxtLink to="/test/transitions/function"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                Nuxt Function
            </NuxtLink>
            <NuxtLink to="/test/transitions/animate"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                CSS Animation
            </NuxtLink>
            <NuxtLink to="/test/transitions/js-i"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                JS & GSAP 1
            </NuxtLink>
            <NuxtLink to="/test/transitions/js-ii"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                JS & GSAP 2
            </NuxtLink>
            <NuxtLink to="/test/transitions/js-iii"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                JS & GSAP 3
            </NuxtLink>
        </nav>
    </div>
</template>

<script>
    export default {
        transition: 'fade' // main.css
    }
</script>
