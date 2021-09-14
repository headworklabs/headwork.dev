//
// The Net Ninja - Vue 3 Transitions (although we are using Vue 2)
// https://www.youtube.com/playlist?list=PL4cUxeGkcC9ghm7-iTfS9n468Kp7l9Ipu
//
<template>
    <div class="flex flex-col items-center justify-center w-full text-center">
        <NuxtLink to="/test/transitions" class="absolute top-0 mt-6 text-gray-400 transition hover:text-gray-800">
            back
        </NuxtLink>
        <nav>
            <NuxtLink to="/test/transitions/js-i" class="mr-2">
                JS1 0
            </NuxtLink>
            <NuxtLink to="/test/transitions/js-i/1" class="mr-2">
                JS1 1
            </NuxtLink>
            <NuxtLink to="/test/transitions/js-i/2" class="mr-2">
                JS1 2
            </NuxtLink>
            <NuxtLink to="/test/transitions/js-i/3" class="mr-2">
                JS1 3
            </NuxtLink>
        </nav>
        <div class="mt-6">
            <Nuxt/>
        </div>
    </div>
</template>
