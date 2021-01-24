//
// Vuex UI state module.
//

export const state = () => ({
    mainNavOpen: false
})

export const mutations = {
    toggleMainNav(state) {
        state.mainNavOpen = !state.mainNavOpen
    }
}
