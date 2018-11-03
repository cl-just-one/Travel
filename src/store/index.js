import vue from 'vue'
import vuex from 'vuex'
import state from './state'
import mutations from './mutations'

vue.use(vuex)

export default new vuex.Store({
  state,
  mutations,
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
