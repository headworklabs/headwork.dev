<template>
    <div class="flex flex-col items-center justify-center w-full text-center">
        <nav class="">
            <NuxtLink to="/transitions/css" class="mr-2">
                CSS 0
            </NuxtLink>
            <NuxtLink to="/transitions/css/1" class="mr-2">
                CSS 1
            </NuxtLink>
            <NuxtLink to="/transitions/css/2" class="mr-2">
                CSS 2
            </NuxtLink>
            <NuxtLink to="/transitions/css/3" class="mr-2">
                CSS 3
            </NuxtLink>
        </nav>
        <div class="mt-6">
            <Nuxt/>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .css-enter-active,
    .css-leave-active {
        @apply transition transform;
    }
    .css-enter,
    .css-leave-to {
        @apply opacity-0 translate-y-6;
    }
</style>
