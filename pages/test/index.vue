<template>
    <div class="flex flex-col items-center justify-center w-full text-center">
        <NuxtLink to="/" class="absolute top-0 mt-6 text-gray-400 transition hover:text-gray-800">
            back
        </NuxtLink>
        <h1 class="font-semibold text-gray-300">TEST // DEPLOY</h1>
        <nav class="mt-6">
            <NuxtLink to="/test/transitions"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                Nuxt Transitions
            </NuxtLink>
            <NuxtLink to="/test/ihatetoms"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                IHATETOMATOES (GSAP)
            </NuxtLink>
            <NuxtLink to="/test/js30"
                class="block mt-2 text-gray-800 transition hover:text-indigo-500">
                Javascript 30
            </NuxtLink>
        </nav>
    </div>
</template>

<script>
    export default {
        transition: 'fade'
    }
</script>
