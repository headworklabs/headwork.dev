<template>
    <div class="flex items-center justify-center min-h-screen">
        <h1 class="px-48 py-12 text-purple-600 border-t border-b border-purple-200 rounded opacity-50">
            Headwork Dot Dev
        </h1>
    </div>
    <!-- <div id="appWrapper"
        class="relative flex min-h-screen overflow-x-hidden font-sans text-gray-800 transition-all duration-300 ease-out"
        :class="{'-ml-28': !$store.state.ui.mainNavOpen}">
        <HwNavigation/>
        <div id="pageWrapper"
            class="flex w-full transition-all duration-300 ease-out"
            :class="{'ml-28': !$store.state.ui.mainNavOpen}">
            <Nuxt/>
        </div>
    </div> -->
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
