//
// Vuex UI state module.
//

export const state = () => ({
    mainNavOpen: false
})

export const mutations = {
    toggleMainNav(state, shouldOpen = null) {
        if (typeof shouldOpen !== 'boolean') {
            return (state.mainNavOpen = !state.mainNavOpen)
        }

        return (state.mainNavOpen = shouldOpen)
    }
}
