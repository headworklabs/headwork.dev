<template>
    <div class="flex flex-col items-center justify-center w-full text-center">
        <NuxtLink to="/"
            class="block group">
            <p class="leading-snug text-gray-400 transition group-hover:text-gray-800">hĕd′wûrk″</p>
            <p class="text-2xl text-gray-800 transition group-hover:text-purple-600">HEADWORK</p>
        </NuxtLink>
        <nav class="mt-6">
            <NuxtLink to="/playground"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                Playground
            </NuxtLink>
            <NuxtLink to="/thoughts"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                Thoughts
            </NuxtLink>
            <NuxtLink to="/noise"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                Noise
            </NuxtLink>
        </nav>
    </div>
</template>

<script>
    export default {
        transition: 'fade'
    }
</script>
