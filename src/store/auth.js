import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
    //   nos indicara si el usuario esta identificado
        isAuth: false,
        // gurdaremos el id de supabase que nos dara al hacer el login
        id: undefined
    }
  },
  actions: {
    login() {
        // TODO cambiar el estado de id autentificacion del usuario
    }, 
    logout() {
        // TODO cambiar el estado de id autentificacion del usuario
    }
  }
})