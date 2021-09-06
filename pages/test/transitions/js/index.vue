<template>
    <div class="flex items-center justify-center w-64 h-32 p-6 text-white bg-indigo-500 shadow-xl rounded-2xl">
        JAVASCRIPT 0
    </div>
</template>

<script>
    export default {
        transition: {
            // --------
            // ENTERING
            // --------
            beforeEnter: function (el) {
                // ...
            },
            // the done callback is optional when
            // used in combination with CSS
            enter: function (el, done) {
                // ...
                done()
            },
            afterEnter: function (el) {
                // ...
            },
            enterCancelled: function (el) {
                // ...
            },
            // --------
            // LEAVING
            // --------
            beforeLeave: function (el) {
                // ...
            },
            // the done callback is optional when
            // used in combination with CSS
            leave: function (el, done) {
                // ...
                done()
            },
            afterLeave: function (el) {
                // ...
            },
            // leaveCancelled only available with v-show
            leaveCancelled: function (el) {
                // ...
            }
        }
    }
</script>
