<template>
    <div class="absolute inset-0">
        <div class="absolute top-0 z-10 flex items-center justify-center w-full text-center">
            <NuxtLink to="/test/ihatetoms/gsap-101" class="mt-6 text-gray-400 transition hover:text-gray-800">
                back
            </NuxtLink>
        </div>
        <div class="z-0 flex items-center justify-center h-screen gsap-screen-1">
            <canvas class="absolute inset-0 particles1"></canvas>
            <transition name="fade-long">
                <div v-show="!showParticles" class="absolute inset-0 bg-white"></div>
            </transition>
            <div class="relative p-16 text-center">
                <svg viewBox="0 0 200 200" class="absolute top-0 left-0 z-0 w-48 text-rose-500 gsap-svg-1">
                    <path fill="currentColor" d="M39.5,-46C43,-44.1,32.2,-23.9,29.6,-9.5C27,4.9,32.6,13.5,30.5,18C28.4,22.6,18.5,23,6.8,34C-4.9,44.9,-18.4,66.2,-26.2,66C-34,65.7,-36,43.9,-47.1,26.4C-58.1,8.9,-78.1,-4.2,-76.2,-13.2C-74.4,-22.3,-50.7,-27.2,-34.4,-26.9C-18,-26.6,-9,-21,4.5,-26.4C18,-31.7,35.9,-48,39.5,-46Z" transform="translate(100 100)" />
                </svg>
                <div class="relative gsap-text-1">
                    <p class="text-lg leading-none text-gray-400">hĕd′wûrk″</p>
                    <p class="text-2xl leading-none">HEADWORK</p>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-center h-screen gsap-screen-2">
            <div class="relative p-16 text-center">
                <svg viewBox="0 0 200 200" class="absolute top-0 z-0 w-48 mx-auto text-purple-600 gsap-svg-2">
                    <path fill="currentColor" d="M37.1,-43.8C45.5,-37.2,47.9,-23,53.1,-7.3C58.3,8.4,66.3,25.6,60.7,34.8C55.1,43.9,35.9,44.9,19.4,49.1C2.8,53.4,-11,60.9,-25.5,60C-40,59.1,-55.2,49.9,-54.8,37.8C-54.5,25.7,-38.8,10.8,-32.8,-2.8C-26.8,-16.4,-30.7,-28.7,-26.8,-36.2C-23,-43.6,-11.5,-46.1,1.4,-47.8C14.4,-49.5,28.7,-50.4,37.1,-43.8Z" transform="translate(100 100)" />
                </svg>
                <div class="relative gsap-text-2">
                    <p class="text-2xl leading-none">scroll experiment</p>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-center h-screen transition-colors duration-500 gsap-screen-3">
            <div class="relative p-16 text-center">
                <svg viewBox="0 0 200 200" class="absolute top-0 right-0 z-0 w-48 text-teal-500 gsap-svg-3">
                    <path fill="currentColor" d="M49,-56.4C61.5,-47.9,68.3,-30.6,68.7,-14.2C69,2.1,62.9,17.4,54.4,30.8C46,44.3,35.2,55.8,20.5,64.9C5.7,74,-13,80.7,-26.7,75C-40.4,69.3,-49.1,51.3,-53.9,35C-58.8,18.6,-59.8,4,-57.5,-10.3C-55.2,-24.6,-49.6,-38.6,-39.5,-47.6C-29.3,-56.6,-14.7,-60.6,1.8,-62.8C18.2,-64.9,36.5,-65,49,-56.4Z" transform="translate(100 100)" />
                </svg>
                <div class="relative gsap-text-3">
                    <p class="text-2xl leading-none">blobssssss</p>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-center h-screen bg-rose-500 gsap-screen-4">
            <div class="relative p-16 text-center">
                <svg viewBox="0 0 200 200" class="absolute top-0 left-0 z-0 w-48 text-white gsap-svg-4">
                    <path fill="currentColor" d="M39.5,-46C43,-44.1,32.2,-23.9,29.6,-9.5C27,4.9,32.6,13.5,30.5,18C28.4,22.6,18.5,23,6.8,34C-4.9,44.9,-18.4,66.2,-26.2,66C-34,65.7,-36,43.9,-47.1,26.4C-58.1,8.9,-78.1,-4.2,-76.2,-13.2C-74.4,-22.3,-50.7,-27.2,-34.4,-26.9C-18,-26.6,-9,-21,4.5,-26.4C18,-31.7,35.9,-48,39.5,-46Z" transform="translate(100 100)" />
                </svg>
                <div class="relative gsap-text-4">
                    <p class="text-lg leading-none text-gray-400">hĕd′wûrk″</p>
                    <p class="text-2xl leading-none">HEADWORK</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import gsap from 'gsap'
    import ScrollTrigger from 'gsap/ScrollTrigger'

    export default {
        head: {
            script: [
                {
                    src: 'https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js'
                }
            ],
        },

        data() {
            return {
                showParticles: false
            }
        },

        mounted() {
            setTimeout(() => {
                Particles.init({
                    selector: '.particles1',
                    color: '#000'
                })

                this.showParticles = true
            }, 600);

            gsap.registerPlugin(ScrollTrigger)

            this.setupScroll1Tweens()
            this.setupScroll2Tweens()
            this.setupScroll3Tweens()
            this.setupScroll4Tweens()
        },

        methods: {
            setupScroll1Tweens() {
                let scrollTrigger = {
                    trigger: '.gsap-screen-1',
                    start: 'top top', // top of .gsap-screen-1 hits top of viewport
                    scrub: true,
                    // markers: true,
                    immediateRender: false, // because we have already tweened the elements
                }

                gsap.from('.gsap-text-1', {
                    opacity: 0,
                    y: 20,
                    x: -100,
                    duration: 0.4,
                })

                gsap.from('.gsap-svg-1', {
                    opacity: 0,
                    y: 40,
                    x: -100,
                    duration: 0.6,
                })

                gsap.to('.gsap-text-1', {
                    opacity: 0,
                    y: -120,
                    x: 100,
                    scrollTrigger
                })

                gsap.to('.gsap-svg-1', {
                    opacity: 0,
                    y: -160,
                    x: 100,
                    scrollTrigger
                })

                // this.setupScroll2Tweens()
            },

            setupScroll2Tweens() {
                let scrollTriggerIn = {
                    trigger: '.gsap-screen-2',
                    start: '75% bottom', // top of .gsap-screen-2 hits top of viewport
                    // markers: true,
                    immediateRender: false,
                }

                let scrollTriggerOut = {
                    trigger: '.gsap-screen-2',
                    start: 'top top', // top of .gsap-screen-2 hits top of viewport
                    scrub: true,
                    // markers: true,
                    immediateRender: false,
                }

                gsap.from('.gsap-text-2', {
                    opacity: 0,
                    y: 20,
                    x: -100,
                    duration: 0.4,
                    scrollTrigger: scrollTriggerIn
                })

                gsap.from('.gsap-svg-2', {
                    opacity: 0,
                    y: 40,
                    x: -100,
                    duration: 0.6,
                    scrollTrigger: scrollTriggerIn
                })

                gsap.to('.gsap-text-2', {
                    opacity: 0,
                    y: -120,
                    x: 100,
                    scrollTrigger: scrollTriggerOut
                })

                gsap.to('.gsap-svg-2', {
                    opacity: 0,
                    y: -160,
                    x: 100,
                    scrollTrigger: scrollTriggerOut
                })
            },

            setupScroll3Tweens() {
                let scrollTriggerIn = {
                    trigger: '.gsap-screen-3',
                    start: '75% bottom', // top of .gsap-screen-3 hits top of viewport
                    // markers: true,
                    immediateRender: false,
                    toggleClass: 'bg-gray-100'
                }

                let scrollTriggerOut = {
                    trigger: '.gsap-screen-3',
                    start: 'top top', // top of .gsap-screen-3 hits top of viewport
                    scrub: true,
                    // markers: true,
                    immediateRender: false,
                }

                gsap.from('.gsap-text-3', {
                    opacity: 0,
                    y: 20,
                    x: -100,
                    duration: 0.4,
                    scrollTrigger: scrollTriggerIn
                })

                gsap.from('.gsap-svg-3', {
                    opacity: 0,
                    y: 40,
                    x: -100,
                    duration: 0.6,
                    scrollTrigger: scrollTriggerIn
                })

                gsap.to('.gsap-text-3', {
                    opacity: 0,
                    y: -120,
                    x: 100,
                    scrollTrigger: scrollTriggerOut
                })

                gsap.to('.gsap-svg-3', {
                    opacity: 0,
                    y: -160,
                    x: 100,
                    scrollTrigger: scrollTriggerOut
                })
            },

            setupScroll4Tweens() {
                let scrollTriggerIn = {
                    trigger: '.gsap-screen-4',
                    start: '75% bottom', // top of .gsap-screen-4 hits top of viewport
                    // markers: true,
                    immediateRender: false,
                }

                let scrollTriggerOut = {
                    trigger: '.gsap-screen-4',
                    start: 'top top', // top of .gsap-screen-4 hits top of viewport
                    scrub: true,
                    // markers: true,
                    immediateRender: false,
                }

                gsap.from('.gsap-text-4', {
                    opacity: 0,
                    y: 20,
                    x: -100,
                    duration: 0.4,
                    scrollTrigger: scrollTriggerIn
                })

                gsap.from('.gsap-svg-4', {
                    opacity: 0,
                    y: 40,
                    x: -100,
                    duration: 0.6,
                    scrollTrigger: scrollTriggerIn
                })

                gsap.to('.gsap-text-4', {
                    opacity: 0,
                    y: -120,
                    x: 100,
                    scrollTrigger: scrollTriggerOut
                })

                gsap.to('.gsap-svg-4', {
                    opacity: 0,
                    y: -160,
                    x: 100,
                    scrollTrigger: scrollTriggerOut
                })
            },
        },
    }
</script>
