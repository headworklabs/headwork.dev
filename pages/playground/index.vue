<template>
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"><!-- Outer Container -->
        <div class="absolute inset-0 z-0 mb-24 bg-blue-400"></div>
        <div class="relative h-full max-w-4xl py-40 mx-auto"><!-- Central Container -->
            <div class="flex">
                <div class="w-1/3"></div>
                <div class="w-2/3">
                    <h1 class="text-lg text-blue-300">Playground</h1>
                </div>
            </div>
            <NuxtLink to="/playground/perspective-effects"
                class="flex mt-8 cursor-pointer group">
                <div class="flex justify-end w-1/3">
                    <div class="w-32 h-32 mt-1 mr-6 transition-all bg-blue-300 group-hover:mt-0 group-hover:shadow-xl">
                    </div>
                </div>
                <div class="w-2/3 transition group-hover:text-white">
                    <h3 class="mt-4 text-2xl">Perspective Effects</h3>
                    <p class="pr-24">Check out these mad warpping wormholes and change your whole damn perspective on shit.</p>
                </div>
            </NuxtLink>
            <NuxtLink to="/playground/gsap-examples"
                class="flex mt-8 cursor-pointer group">
                <div class="flex justify-end w-1/3">
                    <div class="w-32 h-32 mt-1 mr-6 transition-all bg-blue-300 group-hover:mt-0 group-hover:shadow-xl">
                    </div>
                </div>
                <div class="w-2/3 transition group-hover:text-white">
                    <h3 class="mt-4 text-2xl">GSAP Examples</h3>
                    <p class="pr-24">Check out these mad warpping wormholes and change your whole damn perspective on shit.</p>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
    export default {
        head: {
            title: 'Playground | HEADWORK',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Front-end techniques and experiments.'
                }
            ],
        },
        transition: 'page-fade'
    }
</script>
