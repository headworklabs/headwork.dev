<template>
    <div class="flex min-h-screen overflow-x-hidden font-sans text-gray-800 transition-all">
        <Nuxt/>
    </div>
</template>

<style>
    .page-fade-enter-active,
    .page-fade-leave-active {
        @apply transition-opacity duration-300 ease-in-out;
    }
    .page-fade-enter,
    .page-fade-leave-to {
        @apply opacity-0;
    }
</style>
