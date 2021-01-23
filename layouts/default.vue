<template>
    <div class="relative flex min-h-screen font-sans text-gray-800 transition-all duration-300 ease-out"
        :class="{'-ml-32': !showFullMenu}">
        <HwNavigation/>
        <button @click="showFullMenu = !showFullMenu"
            class="absolute top-0 left-0 z-10 p-2 mt-8 text-white transition-all duration-300 ease-out bg-gray-800 focus:outline-none"
            :class="{'ml-32': !showFullMenu}">
            toggle
        </button>
        <Nuxt/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showFullMenu: false
            }
        },
    }
</script>
