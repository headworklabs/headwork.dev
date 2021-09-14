/*
 *
 * Nuxt function transitions.
 * Programatically choose which transition to use.
 *
 *
 *
 */

// https://nuxtjs.org/docs/2.x/features/transitions#function
// Checks what the URI id is and slides left to go higher, right to go lower.
// Returns a transition object which is an undocumented feature so we can specify 'mode'.
// If changing to 'in-out' set "absolute inset-0" in wrapper classes.
export function slideTransitions(to, from) {
    let slideRight = { name: 'slide-right', mode: 'out-in' }
    let slideLeft = { name: 'slide-left', mode: 'out-in' }

    if (!from) return slideLeft
    if (isNaN(parseInt(to.path.slice(-1)))) return slideRight

    return +to.path.slice(-1) < +from.path.slice(-1) ? slideRight : slideLeft
}

/*
 *
 * JS Hook & GSAP Transitions
 * Full control over transitions.
 *
 *
 *
 */
import gsap from 'gsap'
import Vue from 'vue'

// https://vuejs.org/v2/guide/transitions.html#JavaScript-Hooks
// https://greensock.com/cheatsheet/
// Highly customisable transitions with Vue JS Transition Hooks & GSAP.
export const gsapTransitions1 = {
    beforeEnter(el) {
        console.log('T1 beforeEnter')
        el.style.transform = 'translateY(60px)'
        el.style.opacity = 0
    },
    enter(el, done) {
        console.log('T1 enter')
        gsap.to(el, {
            duration: 0.3,
            y: 0,
            opacity: 1,
            ease: 'bounce',
            onComplete: done
        })
    },
    leave(el, done) {
        console.log('T1 leave')
        gsap.to(el, {
            duration: 0.15,
            y: 60,
            opacity: 0,
            onComplete: done
        })
    }
}

// These hooks are being applied to the page METHODS *not* the page TRANSITION.
// Instead, the page transition is basic CSS and this JS hook set is used for the page children elements.
// Each child element will have this code run on it utilising a custom data-index attribute.
export const gsapTransitions2 = {
    beforeEnter(el) {
        console.log('T2 beforeEnter')
        el.style.transform = 'translateX(60px)'
        el.style.opacity = 0
    },
    enter(el, done) {
        console.log('T2 enter')
        gsap.to(el, {
            duration: 0.3,
            x: 0,
            opacity: 1,
            delay: el.dataset.index * 0.2,
            onComplete: done
        })
    },
    leave(el, done) {
        console.log('T2 leave')
        gsap.to(el, {
            duration: 0.15,
            x: 60,
            opacity: 0,
            delay: el.dataset.index * 0.2,
            onComplete: done
        })
    }
}

// https://ihatetomatoes.net/module-1/g101-timelines-1124/
// Running page and child transitions all in same hooks makes it more compartmentalised.
// This also gives better control for leave animations of page children elements.
export const gsapTransitions3 = {
    appear: true,
    beforeEnter(el) {
        console.log('T3 beforeEnter')
        Vue.nextTick(() => {
            gsap.set(el, {
                opacity: 0
            })
            document.querySelectorAll('.gsap-item-set1').forEach((el, i) => {
                gsap.set(el, {
                    x: i % 2 === 0 ? -60 : 60,
                    opacity: 0
                })
            })
        })
    },
    enter(el, done) {
        console.log('T3 enter')
        gsap.to(el, {
            duration: 0.3,
            opacity: 1
        })
        gsap.to('.gsap-item-set1', {
            duration: 0.3,
            x: 0,
            opacity: 1,
            stagger: 0.1,
            onComplete: done
        })
    },
    leave(el, done) {
        document.querySelectorAll('.gsap-item-set1').forEach((el, i) => {
            gsap.to(el, {
                x: i % 2 === 0 ? -60 : 60,
                delay: i * 0.1,
                opacity: 0
            })
        })
        gsap.to(el, {
            duration: 0.3,
            opacity: 0,
            onComplete: done
        })
    }
}
