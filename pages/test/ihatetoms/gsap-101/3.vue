
/*
 *
 * GSAP Timelines
 * https://ihatetomatoes.net/module-1/g101-timelines-1124/
 * https://ihatetomatoes.net/module-1/g101-controls-and-callbacks-834/
 *
 * Similar to previous but you don't need to work out delays as they are inherent.
 * You also have much more control over the ordering, overlapping, defaults, controls and callbacks.
 *
 */

<template>
    <div class="flex flex-col items-center justify-center w-full text-center">
        <NuxtLink to="/test/ihatetoms/gsap-101" class="absolute top-0 mt-6 text-gray-400 transition hover:text-gray-800 gsap-back-link">
            back
        </NuxtLink>
        <h1 class="font-semibold text-white">GSAP 101</h1>
        <h2 class="px-6 py-1 mt-2 text-sm text-indigo-200 bg-indigo-400 rounded-full">3. Timeline a Page</h2>
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
        <div class="absolute bottom-0 grid grid-cols-2 mb-12 gap-x-4 gap-y-2 control-center">
            <button @click="pause" class="button1">
                pause
            </button>
            <button @click="resume" class="button1">
                resume
            </button>
            <button @click="reverse" class="button1">
                reverse
            </button>
            <button @click="restart" class="button1">
                restart
            </button>
            <button @click="seek1" class="button1">
                seek 1
            </button>
            <button @click="seek2" class="button1">
                seek 2
            </button>
            <button @click="speed1" class="button1">
                speed 1/2
            </button>
            <button @click="speed2" class="button1">
                speed x2
            </button>
        </div>
        <transition name="fade">
            <div v-show="showStarted" class="absolute bottom-0 right-0 mb-20 mr-12 text-sm text-white opacity-50 notification">
                started
            </div>
        </transition>
        <transition name="fade">
            <div v-show="showCompleted" class="absolute bottom-0 right-0 mb-16 mr-12 text-sm text-white opacity-50 notification">
                completed
            </div>
        </transition>
    </div>
</template>

<script>
    import gsap from 'gsap'
    import resolveConfig from 'tailwindcss/resolveConfig'
    import tailwindConfig from '@/tailwind.config.js'

    export default {
        transition: 'fade',

        data() {
            return {
                showStarted: false,
                showCompleted: false,
            }
        },

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
                this.timeline = gsap.timeline({
                    onStart: this.onStart,
                    onComplete: this.onComplete,
                })

                document.querySelectorAll('.gsap-item-set1').forEach((el, i) => {
                    gsap.set(el, {
                        x: i % 2 === 0 ? -60 : 60,
                        opacity: 0,
                    })
                })

                gsap.from('.control-center', {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                })

                //
                // Position Param. For overlaps and relative delays.
                // https://greensock.com/position-parameter/
                //
                this.timeline
                    .to('.gsap-back-link', {
                        color: '#fff',
                        duration: 0.2,
                    })
                    .to('body', {
                        backgroundColor: this.twConfig.theme.colors.indigo['500'],
                        duration: 1,
                    }, "-=0.2")
                    .fromTo(['h1', 'h2'], {
                        opacity: 0,
                        y: -20
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.2,
                    }, "-=0.6")
                    .to('.gsap-item-set1', {
                        duration: 0.4,
                        x: 0,
                        opacity: 1,
                        stagger: 0.1,
                    })
            },

            pause() {
                this.timeline.pause()
            },
            resume() {
                this.timeline.resume()
            },
            reverse() {
                this.timeline.reverse()
            },
            restart() {
                this.timeline.restart()
            },
            seek1() {
                this.timeline.seek(0.4)
            },
            seek2() {
                this.timeline.seek(1.2)
            },
            speed1() {
                this.timeline.timeScale(0.5)
            },
            speed2() {
                this.timeline.timeScale(2)
            },

            onStart() {
                this.showStarted = true
                setTimeout(() => this.showStarted = false, 2000);
            },
            onComplete() {
                this.showCompleted = true
                setTimeout(() => this.showCompleted = false, 2000);
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
