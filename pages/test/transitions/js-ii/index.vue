<template>
    <div data-page="0" class="flex items-center justify-center">
        <transition-group
            appear
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
            tag="div"
            class="grid grid-cols-2 gap-4">
            <div key="0" data-index="0" class="w-64 h-32 p-6 text-white shadow-xl bg-rose-500 rounded-2xl">
                One
            </div>
            <div key="1" data-index="1" class="w-64 h-32 p-6 text-white bg-purple-500 shadow-xl rounded-2xl">
                Two
            </div>
            <div key="2" data-index="2" class="w-64 h-32 p-6 text-white bg-teal-500 shadow-xl rounded-2xl">
                Three
            </div>
            <div key="3" data-index="3" class="w-64 h-32 p-6 text-white bg-indigo-500 shadow-xl rounded-2xl">
                Four
            </div>
        </transition-group>
    </div>
</template>

<script>
    import { gsapTransitions2 } from '@/utils/transitions'

    export default {
        transition: 'fade',

        methods: gsapTransitions2
    }
</script>
