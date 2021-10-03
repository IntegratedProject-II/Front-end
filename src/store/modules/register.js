export const register = {
    namespaced: true,
    state: {
        role: ""
    },
    mutations:{
        setRole(state,payload){
            state.role = payload
        }
    },
    actions: {
        setRole(context,payload) {
            context.commit("setRole",payload)
        }
    },
}