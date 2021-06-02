export default {
  state: () => ({
    name: 'escribe tu nombre',
    lastName: 'escribe tu apellido',
    newNotification: false,
    editNotification: false
  }),
  getters: {},
  mutations: {
    SET_NAME(state, payload) {
      state.name = payload.name
      state.lastName = payload.lastName
    },
    SET_NOTIFICATION_NEW(state) {
        state.newNotification = true
        setTimeout(() => {
            state.newNotification = false
        }, 3000);
    },
    SET_NOTIFICATION_EDIT(state) {
        state.editNotification = true
        setTimeout(() => {
            state.editNotification = false
        }, 3000);
    }
  },
  actions: {
    saveName({ commit }, name) {
      commit('SET_NAME', name)
    },
    getNotificationNew({commit}) {
        commit('SET_NOTIFICATION_NEW')
    },
    getNotificationEdit({commit}) {
        commit('SET_NOTIFICATION_EDIT')
    }
  },
}
