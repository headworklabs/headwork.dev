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
                @mouseleave.native="underlineAnimateOut"
                class="flex mt-8 cursor-pointer group index-card">
                <div class="flex justify-end w-1/3">
                    <div class="w-32 h-32 mt-1 mr-6 transition-all bg-blue-300 group-hover:mt-0 group-hover:shadow-xl">
                    </div>
                </div>
                <div class="relative w-2/3 overflow-hidden transition group-hover:text-white">
                    <h3 class="mt-4 text-2xl">Perspective Effects</h3>
                    <p class="pr-24">Check out these mad warpping wormholes and change your whole damn perspective on shit.</p>
                    <div class="w-32 mt-2 overflow-hidden">
                        <div class="index-card-underline transform -translate-x-full h-0.5 bg-white"></div>
                    </div>
                </div>
            </NuxtLink>
            <NuxtLink to="/playground/gsap-examples"
                @mouseleave.native="underlineAnimateOut"
                class="flex mt-8 cursor-pointer group index-card">
                <div class="flex justify-end w-1/3">
                    <div class="w-32 h-32 mt-1 mr-6 transition-all bg-blue-300 group-hover:mt-0 group-hover:shadow-xl">
                    </div>
                </div>
                <div class="relative w-2/3 transition group-hover:text-white">
                    <h3 class="mt-4 text-2xl">GSAP Examples</h3>
                    <p class="pr-24">Check out these mad warpping wormholes and change your whole damn perspective on shit.</p>
                    <div class="w-32 mt-2 overflow-hidden">
                        <div class="index-card-underline transform -translate-x-full h-0.5 bg-white"></div>
                    </div>
                </div>
            </NuxtLink>
            <NuxtLink to="/playground/gsap-examples"
                @mouseleave.native="underlineAnimateOut"
                class="flex mt-8 cursor-pointer group index-card">
                <div class="flex justify-end w-1/3">
                    <div class="w-32 h-32 mt-1 mr-6 transition-all bg-blue-300 group-hover:mt-0 group-hover:shadow-xl">
                    </div>
                </div>
                <div class="relative w-2/3 transition group-hover:text-white">
                    <h3 class="mt-4 text-2xl">GSAP Examples</h3>
                    <p class="pr-24">Check out these mad warpping wormholes and change your whole damn perspective on shit.</p>
                    <div class="w-32 mt-2 overflow-hidden">
                        <div class="index-card-underline transform -translate-x-full h-0.5 bg-white"></div>
                    </div>
                </div>
            </NuxtLink>
            <NuxtLink to="/playground/gsap-examples"
                @mouseleave.native="underlineAnimateOut"
                class="flex mt-8 cursor-pointer group index-card">
                <div class="flex justify-end w-1/3">
                    <div class="w-32 h-32 mt-1 mr-6 transition-all bg-blue-300 group-hover:mt-0 group-hover:shadow-xl">
                    </div>
                </div>
                <div class="relative w-2/3 transition group-hover:text-white">
                    <h3 class="mt-4 text-2xl">GSAP Examples</h3>
                    <p class="pr-24">Check out these mad warpping wormholes and change your whole damn perspective on shit.</p>
                    <div class="w-32 mt-2 overflow-hidden">
                        <div class="index-card-underline transform -translate-x-full h-0.5 bg-white"></div>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
    // import GSAP and ScrollTrigger
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'

    // register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)

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

        transition: 'page-fade',

        mounted() {
            this.initNavigation()
        },

        methods: {
            initNavigation() {
                ScrollTrigger.create({
                    start: 1,
                    toggleClass: {
                        targets: 'body',
                        className: 'has-scrolled'
                    },
                    markers: true
                })
            },

            underlineAnimateOut(e) {
                let underline = e.target.querySelector('.index-card-underline')

                underline.classList.add('animate-out')
                underline.ontransitionend = () => underline.classList.remove('animate-out')
            }
        },
    }
</script>

<style>
    .index-card:hover .index-card-underline {
        @apply transition duration-300 ease-out translate-x-0;
    }
    .index-card .index-card-underline.animate-out {
        @apply transition duration-300 ease-out translate-x-full;
    }
</style>
