<template>
    <div class="flex items-center justify-center">
        <div class="grid grid-cols-2 gap-4">
            <div class="w-64 h-32 p-6 text-white shadow-xl bg-rose-500 rounded-2xl gsap-item-set1">
                One
            </div>
            <div class="w-64 h-32 p-6 text-white bg-purple-500 shadow-xl rounded-2xl gsap-item-set1">
                Two
            </div>
            <div class="w-64 h-32 p-6 text-white bg-teal-500 shadow-xl rounded-2xl gsap-item-set1">
                Three
            </div>
            <div class="w-64 h-32 p-6 text-white bg-indigo-500 shadow-xl rounded-2xl gsap-item-set1">
                Four
            </div>
        </div>
    </div>
</template>

<script>
    import gsap from 'gsap'
    import { gsapTransitions3 } from '@/utils/transitions'

    export default {
        transition: gsapTransitions3,
    }
</script>
