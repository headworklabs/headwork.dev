<template>
    <div id="appWrapper"
        class="relative flex min-h-screen overflow-x-hidden font-sans text-gray-800 transition-all duration-300 ease-out"
        :class="{'-ml-28': !$store.state.ui.mainNavOpen}">
        <HwNavigation/>
        <div id="pageWrapper"
            class="flex w-full transition-all duration-300 ease-out"
            :class="{'ml-28': !$store.state.ui.mainNavOpen}">
            <Nuxt/>
        </div>
    </div>
</template>

<style>
    .page-fade-enter-active,
    .page-fade-leave-active {
        @apply transition-opacity duration-300 ease-in-out;
    }
    .page-fade-enter,
    .page-fade-leave-to {
        @apply opacity-0
    }
</style>
