<template>
    <div class="flex flex-col items-center justify-center w-full text-center">
        <NuxtLink to="/test/ihatetoms" class="absolute top-0 mt-6 text-gray-400 transition hover:text-gray-800">
            back
        </NuxtLink>
        <h1 class="font-semibold text-gray-300">
            <a href="https://ihatetomatoes.net/course/greensock-101/" target="_blank">GSAP 101</a>
        </h1>
        <nav class="mt-6">
            <NuxtLink to="/test/ihatetoms/gsap-101/1"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                1. Tweens (to, from, toFrom &amp; set)
            </NuxtLink>
            <NuxtLink to="/test/ihatetoms/gsap-101/2"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                2. Tween a Page
            </NuxtLink>
            <NuxtLink to="/test/ihatetoms/gsap-101/3"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                3. Timeline a Page
            </NuxtLink>
            <NuxtLink to="/test/ihatetoms/gsap-101/4"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                4. ScrollTrigger Basic
            </NuxtLink>
            <NuxtLink to="/test/ihatetoms/gsap-101/5"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                5. ScrollTrigger Parallax
            </NuxtLink>
            <NuxtLink to="/test/ihatetoms/gsap-101/6"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                5. ScrollTrigger Pin
            </NuxtLink>
        </nav>
    </div>
</template>

<script>
    export default {
        transition: 'fade'
    }
</script>

<style>
    .control-center code {
        @apply block bg-indigo-100 text-indigo-500 rounded-xl;
    }

    .control-center .button1 {
        @apply block w-full px-2 py-0.5 text-sm text-white transition-colors bg-gray-800 hover:bg-gray-600 rounded-xl mt-1;
    }

    .control-center .button2 {
        @apply block w-full px-2 py-0.5 text-sm mt-1 text-gray-400 transition-colors bg-gray-200 hover:bg-gray-300 rounded-xl;
    }
</style>
