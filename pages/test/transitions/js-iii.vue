//
// I Hate Tomatoes - GreenSock 101 (from, to, fromTo, set, timelines)
// https://ihatetomatoes.net/course/greensock-101/
// https://ihatetomatoes.net/module-1/g101-timelines-1124/ (working from this lesson)
// https://greensock.com/cheatsheet/
//
<template>
    <div class="flex flex-col items-center justify-center w-full text-center">
        <NuxtLink to="/test/transitions" class="absolute top-0 mt-6 text-gray-400 transition hover:text-gray-800">
            back
        </NuxtLink>
        <nav>
            <NuxtLink to="/test/transitions/js-iii" class="mr-2">
                JS3 0
            </NuxtLink>
            <NuxtLink to="/test/transitions/js-iii/1" class="mr-2">
                JS3 1
            </NuxtLink>
            <NuxtLink to="/test/transitions/js-iii/2" class="mr-2">
                JS3 2
            </NuxtLink>
            <NuxtLink to="/test/transitions/js-iii/3" class="mr-2">
                JS3 3
            </NuxtLink>
        </nav>
        <div class="mt-6">
            <Nuxt/>
        </div>
    </div>
</template>
