import us from '@/services/user_serve'

const user = {
  state: {
    isLogin: !!localStorage.getItem('token')
  },
  mutations: {
    // 改变登录状态
    setLoginState (state, val) {
      state.isLogin = val
    }
  },
  actions: {
    login ({commit}, userInfo) {
      return us.login(userInfo).then(({token})=>{
        if (token) {
          commit('setLoginState', true)
          localStorage.setItem('token', token)
          return true
        }
        return false
      })
    },
    logout ({commit}) {
      commit('setLoginState', false)
      localStorage.removeItem('token')
    }
  }
}

export default user
