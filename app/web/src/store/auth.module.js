import api from '@/common/api'
import jwt from '@/common/jwt'
import { LOGIN, LOGOUT, CHECK_AUTH, UPDATE_USER } from './actions.type'
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from './mutations.type'

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!jwt.getToken(),
  isAdmin: false
}

const getters = {
  currentUser(state) {
    return state.user
  },
  isAuthenticated(state) {
    return state.isAuthenticated
  },
  isAdmin(state) {
    return state.isAdmin
  }
}

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true
    state.user = user
    state.isAdmin = user.admin
    state.errors = {}
    jwt.saveToken(user.token)
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false
    state.user = {}
    state.isAdmin = false
    state.errors = {}
    jwt.destroyToken()
  }
}

const actions = {
  [LOGIN](context, payload) {
    return new Promise((resolve) => {
      api.post('login', payload)
        .then((response) => {
          if (response.data.auth) {
            context.commit(SET_AUTH, response.data.user)
            resolve(response.data)
          } else {
            context.commit(SET_ERROR, response.data.errors)
          }
        })
    })
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH)
  },
  [CHECK_AUTH](context) {
    if (jwt.getToken()) {
      api.setHeader()
      api.get('me')
        .then((response) => {
          context.commit(SET_AUTH, response.data)
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 403) {
              context.dispatch(LOGOUT)
            } else {
              context.commit(SET_ERROR, response.data.errors)
            }
          }
        })
    } else {
      context.commit(PURGE_AUTH)
    }
  },
  [UPDATE_USER](context, payload) {
    const {email, password} = payload
    const user = {
      email
    }
    if (password) {
      user.password = password
    }

    return api.put('user', user)
      .then((data) => {
        context.commit(SET_AUTH, data.user)
        return data
      })
  }
/*
  inspectToken() {
    const token = this.state.jwt;
    if (token) {
      const decoded = jwt_decode(token);
      const exp = decoded.exp
      const orig_iat = decode.orig_iat
      if(exp - (Date.now() / 1000) < 1800 && (Date.now() / 1000) - orig_iat < 628200){
        this.dispatch('refreshToken')
      } else if (exp -(Date.now()/1000) < 1800){
        // DO NOTHING, DO NOT REFRESH
      } else {
        // PROMPT USER TO RE-LOGIN, THIS ELSE CLAUSE COVERS THE CONDITION WHERE A TOKEN IS EXPIRED AS WELL
      }
    }
  }
*/
}

export default {
  state,
  actions,
  mutations,
  getters
}
