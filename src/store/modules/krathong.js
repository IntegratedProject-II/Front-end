export const krathong = {
    namespaced: true,
    state: {
        kt_id: "",
    },
    mutations:{
        setKrathongId(state,payload){
            state.kt_id = payload
        }
    },
    actions: {
        setKrathongId(context,payload) {
            context.commit("setKrathongId",payload)
        }
    },
}