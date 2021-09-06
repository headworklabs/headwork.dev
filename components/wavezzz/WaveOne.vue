// SuperHi: How to Draw and Animate an SVG Wave Using Javascript
// https://library.superhi.com/posts/how-to-draw-and-animate-an-svg-wave-using-javascript
<template>
    <div>
        <h2 class="mt-12 text-2xl">
            Sine of the Times
        </h2>
        <div class="p-24 mt-6 bg-gray-800 shadow-xl rounded-3xl">
            <svg width="600"
                :height="svgHeight + svgStrokeWidth"
                fill="none"
                :stroke-width="svgStrokeWidth"
                stroke="currentcolor"
                stroke-linecap="round"
                class="text-indigo-500">
                <path :d="svgPath"/>
            </svg>
        </div>
    </div>
</template>

<script>


    export default {
        data() {
            return {
                svgPath: 'M10,10 L50,100 L90,50',
                svgHeight: 25,
                svgStrokeWidth: 4,
                xCoords: [],
                time: 0,
                speed: 0.5,
            }
        },

        mounted() {
            for (var i = 0; i <= 500; i++) {
                this.xCoords.push(i)
            }

            this.animate()
        },

        methods: {
            animate() {
                let points = this.xCoords.map(x => {
                    let y = (this.svgHeight / 2) + (this.svgStrokeWidth / 2) + ((this.svgHeight / 2) * Math.cos((x + this.time) / 10))

                    return [x, y]
                })

                this.svgPath = "M" + points.map(p => {
                    return p[0] + "," + p[1]
                }).join(" L")

                this.time += this.speed

                requestAnimationFrame(this.animate)
            }
        },
    }
</script>
