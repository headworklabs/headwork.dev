
<template>
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"><!-- Outer Container -->
        <div class="absolute inset-0 z-0 mb-24 bg-blue-400"></div>
        <div class="relative h-full max-w-4xl mx-auto"><!-- Central Container -->
            <div class="h-full py-24"><!-- Content -->
                <h1 class="text-4xl">GSAP Examples</h1>
                <ExampleOne/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head: {
            title: 'GSAP Examples | HEADWORK',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Front-end techniques and experiments.'
                }
            ],
        },

        mounted() {

        }
    }
</script>
