import { createStore } from 'vuex'
import { signin } from './modules/signin'
import { member } from './modules/member'
import { register } from './modules/register'

export default createStore({
  modules: {
    member,
    signin,
    register

  }
})
