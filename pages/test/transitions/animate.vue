<template>
    <div class="flex flex-col items-center justify-center w-full text-center">
        <NuxtLink to="/test/transitions" class="absolute top-0 mt-6 text-gray-400 transition hover:text-gray-800">
            back
        </NuxtLink>
        <nav>
            <NuxtLink to="/test/transitions/animate" class="mr-2">
                Animate 0
            </NuxtLink>
            <NuxtLink to="/test/transitions/animate/1" class="mr-2">
                Animate 1
            </NuxtLink>
            <NuxtLink to="/test/transitions/animate/2" class="mr-2">
                Animate 2
            </NuxtLink>
            <NuxtLink to="/test/transitions/animate/3" class="mr-2">
                Animate 3
            </NuxtLink>
        </nav>
        <div class="mt-6">
            <Nuxt/>
        </div>
    </div>
</template>

<style scoped>
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
