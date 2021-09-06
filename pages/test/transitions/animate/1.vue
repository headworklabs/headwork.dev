<template>
    <div class="flex items-center justify-center w-64 h-32 p-6 text-white shadow-xl bg-rose-500 rounded-2xl">
        Animate 1
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
