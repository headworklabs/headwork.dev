<template>
    <div class="flex flex-col items-center justify-center w-full text-center">
        <NuxtLink to="/test" class="absolute top-0 mt-6 text-gray-400 transition hover:text-gray-800">
            back
        </NuxtLink>
        <h1 class="font-semibold text-gray-300">
            <a href="https://ihatetomatoes.net/courses/" target="_blank">IHATETOMATOES</a>
        </h1>
        <nav class="mt-6">
            <a href="https://greensock.com/cheatsheet/"
                target="_blank"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                GSAP Cheat Sheet
            </a>
            <NuxtLink to="/test/ihatetoms/gsap-101"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                GSAP 101
            </NuxtLink>
            <NuxtLink to="/test/ihatetoms/gsap-practical"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                Practical GSAP
            </NuxtLink>
            <NuxtLink to="/test/ihatetoms/pen-reveal"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                Pen Reveal
            </NuxtLink>
            <NuxtLink to="/test/ihatetoms/bella"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                Bella
            </NuxtLink>
        </nav>
    </div>
</template>

<script>
    export default {
        transition: 'fade'
    }
</script>
