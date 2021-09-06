<template>
    <div class="flex items-center justify-center w-64 h-32 p-6 text-white bg-teal-500 shadow-xl rounded-2xl">
        Function 3
    </div>
</template>

<script>
    import { slideTransitions } from '@/utils/transitions'

    export default {
        transition: slideTransitions
    }
</script>
