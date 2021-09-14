<template>
    <div class="flex items-center justify-center">
        <div class="grid grid-cols-2 gap-4">
            <div class="w-64 h-32 p-6 text-white bg-purple-500 shadow-xl rounded-2xl gsap-item-set1">
                Alpha
            </div>
            <div class="w-64 h-32 p-6 text-white bg-teal-500 shadow-xl rounded-2xl gsap-item-set1">
                Beta
            </div>
            <div class="w-64 h-32 p-6 text-white bg-indigo-500 shadow-xl rounded-2xl gsap-item-set1">
                Gamma
            </div>
            <div class="w-64 h-32 p-6 text-white shadow-xl bg-rose-500 rounded-2xl gsap-item-set1">
                Delta
            </div>
        </div>
    </div>
</template>

<script>
    import { gsapTransitions3 } from '@/utils/transitions'

    export default {
        transition: gsapTransitions3,
    }
</script>
