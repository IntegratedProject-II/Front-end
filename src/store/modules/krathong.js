export const krathong = {
    namespaced: true,
    state: {
        kt_id: "",
        wish:"",
        tp_id:""
    },
    mutations:{
        setKrathongId(state,payload){
            state.kt_id = payload
        },
        setWish(state,payload){
            state.wish = payload
        },
        setTypePlace(state,payload){
            state.tp_id = payload
        }
    },
    actions: {
        setKrathongId(context,payload) {
            context.commit("setKrathongId",payload)
        },
        setWish(context,payload) {
            context.commit("setWish",payload)
        },
        setTypePlace(context,payload) {
            context.commit("setTypePlace",payload)
        }
    },
}