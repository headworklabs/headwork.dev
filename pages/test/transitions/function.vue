<template>
    <div class="flex flex-col items-center justify-center w-full text-center">
        <NuxtLink to="/test/transitions" class="absolute top-0 mt-6 text-gray-400 transition hover:text-gray-800">
            back
        </NuxtLink>
        <nav>
            <NuxtLink to="/test/transitions/function" class="mr-2">
                Function 0
            </NuxtLink>
            <NuxtLink to="/test/transitions/function/1" class="mr-2">
                Function 1
            </NuxtLink>
            <NuxtLink to="/test/transitions/function/2" class="mr-2">
                Function 2
            </NuxtLink>
            <NuxtLink to="/test/transitions/function/3" class="mr-2">
                Function 3
            </NuxtLink>
        </nav>
        <div class="relative mt-6">
            <Nuxt/>
        </div>
    </div>
</template>

<style scoped>
    /* Slide right */
    .slide-right-enter-active,
    .slide-right-leave-active {
        /*  for 'in-out' add absolute inset-0 */
        @apply transform transition ease-in-out;
    }
    .slide-right-enter {
        @apply opacity-0 -translate-x-24;
    }
    .slide-right-enter-to,
    .slide-right-leave {
        @apply opacity-100 translate-x-0;
    }
    .slide-right-leave-to {
        @apply opacity-0 translate-x-24;
    }

    /* Slide left */
    .slide-left-enter-active,
    .slide-left-leave-active {
        /*  for 'in-out' add absolute inset-0 */
        @apply transform transition ease-in-out;
    }
    .slide-left-enter {
        @apply opacity-0 translate-x-24;
    }
    .slide-left-enter-to,
    .slide-left-leave {
        @apply opacity-100 translate-x-0;
    }
    .slide-left-leave-to {
        @apply opacity-0 -translate-x-24;
    }
</style>
