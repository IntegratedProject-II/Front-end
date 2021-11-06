export const signin = {
    namespaced: true,
    state: {
        role: "",
        isSignIn: false,
        
    },
    mutations: {
        setRole(state, payload) {
            state.role = payload
        },
        // signInStatus(state) {
        //     if (state.role !== "" || state.role !== null || state.role !== undefined) {
        //         state.isSignIn = true;
        //     }else{
        //         state.isSignIn = false;
        //     }
        // }
    },
    actions: {
        setRole(context, payload) {
            context.commit("setRole", payload)
        },
        // signInStatus(context, payload){
        //     context.commit("signInStatus",payload)
        // }
        
    },
}