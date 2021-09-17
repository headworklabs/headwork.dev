
/*
 *
 * GSAP Tweens in Order
 * https://ihatetomatoes.net/module-1/g101-to-and-from-tweens-811/
 * https://ihatetomatoes.net/module-1/g101-from-and-set-tweens-257/
 *
 *
 */

<template>
    <div class="flex flex-col items-center justify-center w-full text-center">
        <NuxtLink to="/test/ihatetoms/gsap-101" class="absolute top-0 mt-6 text-gray-400 transition hover:text-gray-800 gsap-back-link">
            back
        </NuxtLink>
        <h1 class="font-semibold text-white">GSAP 101</h1>
        <h2 class="px-6 py-1 mt-2 text-sm text-indigo-200 bg-indigo-400 rounded-full">2. Tween a Page</h2>
        <div class="grid grid-cols-2 gap-4 mt-12">
            <div class="w-64 h-32 p-6 text-white bg-blue-500 shadow-xl rounded-2xl gsap-item-set1">
                A
            </div>
            <div class="w-64 h-32 p-6 text-white shadow-xl bg-rose-500 rounded-2xl gsap-item-set1">
                B
            </div>
            <div class="w-64 h-32 p-6 text-white bg-purple-500 shadow-xl rounded-2xl gsap-item-set1">
                C
            </div>
            <div class="w-64 h-32 p-6 text-white bg-teal-500 shadow-xl rounded-2xl gsap-item-set1">
                D
            </div>
        </div>
    </div>
</template>

<script>
    import gsap from 'gsap'
    import resolveConfig from 'tailwindcss/resolveConfig'
    import tailwindConfig from '@/tailwind.config.js'

    export default {
        transition: 'fade',

        mounted() {
            this.twConfig = resolveConfig(tailwindConfig)

            this.runPageEntryTweens()
        },

        beforeRouteLeave(to, from, next) {
            this.runPageExitTweens()

            next()
        },

        methods: {
            runPageEntryTweens() {
                document.querySelectorAll('.gsap-item-set1').forEach((el, i) => {
                    gsap.set(el, {
                        x: i % 2 === 0 ? -60 : 60,
                        opacity: 0,
                    })
                })

                gsap.to('.gsap-back-link', {
                    color: '#fff',
                    duration: 0.2,
                })

                gsap.to('body', {
                    backgroundColor: this.twConfig.theme.colors.indigo['500'],
                    duration: 1,
                })

                gsap.fromTo(['h1', 'h2'], {
                    opacity: 0,
                    y: -20
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: 0.6,
                    stagger: 0.2,
                })

                gsap.to('.gsap-item-set1', {
                    delay: 1.4,
                    duration: 0.4,
                    x: 0,
                    opacity: 1,
                    stagger: 0.1,
                })
            },

            runPageExitTweens() {
                document.querySelectorAll('.gsap-item-set1').forEach((el, i) => {
                    gsap.to(el, {
                        x: i % 2 === 0 ? -60 : 60,
                        opacity: 0,
                        duration: 0.4,
                    })
                })

                gsap.to('body', { backgroundColor: this.twConfig.theme.colors.white, duration: 0.6 })
            }
        },
    }
</script>
