export const krathong = {
    namespaced: true,
    state: {
        kt_id: "",
        wish:"",
    },
    mutations:{
        setKrathongId(state,payload){
            state.kt_id = payload
        },
        setWish(state,payload){
            state.wish = payload
        }
    },
    actions: {
        setKrathongId(context,payload) {
            context.commit("setKrathongId",payload)
        },
        setWish(context,payload) {
            context.commit("setWish",payload)
        }
    },
}