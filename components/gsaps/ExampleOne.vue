// SuperHi: 3d perspective effect in CSS and Javascript
// https://www.superhi.com/library/posts/3d-perspective-effect-in-css-and-javascript
<template>
    <div>
        <h2 class="mt-12 text-2xl">
            GSAP Examples
        </h2>
        <p class="mt-6">
            Uses <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect" target="_blank"><code>getBoundingCLientRect</code></a> with image (dimensions/2) to get the image's center coordinates relative to the viewport left and top. Compares this to the cursor coordinates during mouseover events to determine how much to 3D rotate the image and in which direction.
        </p>
        <div class="mt-6 perpective-800">
            <img src="~/assets/img/art-image-game.png"
                @mousemove="mouseMove"
                @mouseleave="mouseLeave"
                ref="artImage"
                class="w-64 transition-transform duration-300 ease-out"
                alt="Image Game Art">
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            this.setupCoords()
        },

        methods: {
            setupCoords() {
                // getBoundingCLientRect = size of el and pos relative to viewport
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
                this.domRect = this.$refs.artImage.getBoundingClientRect()

                // Offset from left and top of viewport to center of image
                this.artCenterOffestX = this.domRect.left + (this.$refs.artImage.offsetWidth / 2)
                this.artCenterOffsetY = this.domRect.top + (this.$refs.artImage.offsetHeight / 2)
            },

            mouseMove(event) {
                // Get the difference between the image offset and cursor position.
                // This can change perspective of image to follow cursor.
                // Divide it by higher numbers to temper the amount of rotation.
                const angleX = (this.artCenterOffsetY - event.pageY) / 20
                const angleY = (this.artCenterOffestX - event.pageX) / -20

                this.$refs.artImage.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`
            },

            mouseLeave() {
                this.$refs.artImage.style.transform = "rotateX(0deg) rotateY(0deg)"
            }
        },
    }
</script>

<style>
    .perpective-800 {
        perspective: 800px;
    }
</style>
