<template>
    <div class="flex items-center justify-center w-64 h-32 p-6 text-white bg-teal-500 shadow-xl rounded-2xl">
        Animate 3
    </div>
</template>

<script>
    export default {
        transition: {
            name: 'bounce',
            mode: 'out-in'
        }
    }
</script>
