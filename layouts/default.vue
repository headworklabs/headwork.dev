<template>
    <div class="relative flex min-h-screen overflow-x-hidden font-sans text-gray-800 transition-all duration-300 ease-out"
        :class="{'-ml-32': !$store.state.ui.mainNavOpen}">
        <HwNavigation/>
        <Nuxt />
    </div>
</template>

<script>

</script>
