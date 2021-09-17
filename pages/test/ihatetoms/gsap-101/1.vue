
/*
 *
 * GSAP Tweens from Actions
 * https://ihatetomatoes.net/module-1/g101-to-and-from-tweens-811/
 * https://ihatetomatoes.net/module-1/g101-from-and-set-tweens-257/
 *
 *
 */

<template>
    <div class="flex flex-col items-center justify-center w-full text-center">
        <NuxtLink to="/test/ihatetoms/gsap-101" class="absolute top-0 mt-6 text-gray-400 transition hover:text-gray-800">
            back
        </NuxtLink>
        <h1 class="font-semibold text-gray-300">GSAP 101</h1>
        <h2 class="px-6 py-1 mt-2 text-sm text-gray-500 bg-gray-300 rounded-full">1. Tweens (to, from, toFrom, set)</h2>
        <!--
            First One: to
            https://greensock.com/docs/v3/GSAP/gsap.to()
         -->
        <div class="flex items-start px-6 py-4 mt-6 bg-gray-100 w-96 rounded-xl">
            <div class="w-24 mr-4 control-center">
                <code>to</code>
                <button @click="startOne" class="button1">play</button>
                <button @click="reverseOne" class="button2">reverse</button>
            </div>
            <div ref="objectOne" class="w-24 h-24 bg-gray-200 rounded-xl"></div>
        </div>
        <!--
            Second One: to
            https://greensock.com/docs/v3/GSAP/gsap.to()
         -->
        <div class="flex items-start px-6 py-4 mt-6 bg-gray-100 w-96 rounded-xl">
            <div class="w-24 mr-4 control-center">
                <code>to</code>
                <button @click="startTwo" class="button1">play</button>
                <button @click="reverseTwo" class="button2">reverse</button>
            </div>
            <div ref="objectTwo">
                <div class="w-24 h-4 bg-gray-200 rounded-xl"></div>
                <div class="w-24 h-4 mt-2 bg-gray-200 rounded-xl"></div>
                <div class="w-24 h-4 mt-2 bg-gray-200 rounded-xl"></div>
                <div class="w-24 h-4 mt-2 bg-gray-200 rounded-xl"></div>
                <div class="w-24 h-4 mt-2 bg-gray-200 rounded-xl"></div>
            </div>
        </div>
        <!--
            Third One: from
            https://greensock.com/docs/v3/GSAP/gsap.from
         -->
        <div class="flex items-start px-6 py-4 mt-6 bg-gray-100 w-96 rounded-xl">
            <div class="w-24 mr-4 control-center">
                <code>from</code>
                <button @click="startThree" class="button1">play</button>
                <button @click="reverseThree" class="button2">reverse</button>
            </div>
            <div ref="objectThree" class="w-24 h-24 bg-indigo-500 rounded-xl"></div>
        </div>
        <!--
            Fourth One: fromTo
            https://greensock.com/docs/v3/GSAP/gsap.fromTo()
         -->
        <div class="flex items-start px-6 py-4 mt-6 bg-gray-100 w-96 rounded-xl">
            <div class="w-24 mr-4 control-center">
                <code>fromTo</code>
                <button @click="startFour" class="button1">play</button>
                <button @click="reverseFour" class="button2">pause</button>
            </div>
            <div ref="objectFour" class="w-24 h-24 bg-indigo-500 rounded-xl"></div>
        </div>
        <!--
            Fifth One: set
            https://greensock.com/docs/v3/GSAP/gsap.fromTo()
         -->
        <div class="flex items-start px-6 py-4 mt-6 bg-gray-100 w-96 rounded-xl">
            <div class="w-24 mr-4 control-center">
                <code>set</code>
                <button @click="startFive" class="button1">play</button>
                <button @click="reverseFive" class="button2">reset</button>
            </div>
            <div ref="objectFive" class="w-24 h-24 bg-gray-200 rounded-xl"></div>
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

            this.setupThree()
        },

        methods: {
            startOne() {
                this.tweenOne = gsap.to(this.$refs.objectOne, {
                    duration: 0.6,
                    x: 100,
                    rotation: 90,
                    backgroundColor: this.twConfig.theme.colors.indigo['500'],
                })

                this.tweenOne.play()
            },

            reverseOne() {
                if (this.tweenOne) this.tweenOne.reverse()
            },

            startTwo() {
                this.tweenTwo = gsap.to(this.$refs.objectTwo.children, {
                    duration: 0.6,
                    x: 100,
                    rotation: 180,
                    stagger: 0.2,
                    backgroundColor: this.twConfig.theme.colors.indigo['500'],
                })

                this.tweenTwo.play()
            },

            reverseTwo() {
                if (this.tweenTwo) this.tweenTwo.reverse()
            },

            setupThree() {
                this.tweenThree = gsap.from(this.$refs.objectThree, {
                    duration: 0.6,
                    x: 100,
                    rotation: 90,
                    opacity: 0,
                    backgroundColor: this.twConfig.theme.colors.gray['200'],
                })

                this.tweenThree.pause()
            },

            startThree() {
                this.tweenThree.play()
            },

            reverseThree() {
                if (this.tweenThree) this.tweenThree.reverse()
            },

            startFour() {
                if (this.tweenFour) return this.tweenFour.play()

                this.tweenFour = gsap.fromTo(
                    this.$refs.objectFour,
                    {
                        x: 0,
                        rotation: 0,
                        backgroundColor: this.twConfig.theme.colors.indigo['500'],
                    },
                    {
                        x: 100,
                        rotation: 360,
                        backgroundColor: this.twConfig.theme.colors.teal['500'],
                        duration: 0.6,
                        repeat: -1,
                        yoyo: true,
                    },
                )

                this.tweenFour.play()
            },

            reverseFour() {
                if (this.tweenFour) this.tweenFour.pause()
            },

            startFive() {
                this.tweenFive = gsap.set(this.$refs.objectFive, {
                    x: 100,
                    rotation: 90,
                    backgroundColor: this.twConfig.theme.colors.indigo['500'],
                })

                this.tweenFive.play()
            },

            reverseFive() {
                if (this.tweenFive) this.tweenFive.reverse()
            },
        },
    }
</script>
