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
