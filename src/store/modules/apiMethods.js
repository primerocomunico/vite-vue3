import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/api";

export default {
  namespaced: true,
  state: {
    names: []
  },
  mutations: {
    setNames(state, payload) {
      state.names = payload;
    },
    editFrontName(state, payload) {
      state.names = payload
    }
  },
  actions: {
    getNames({ commit }) {
      axios
        .get("/names")
        .then(res => {
          commit("setNames", res.data);
        })
        .catch(e => {
          this.getAlert(
            "error",
            "Hubo un error al cargar la página, vuelve a intentarlo"
          );
        });
    }
  },
  EditName({commit}, id) {
    axios
      .put(`/name/${id}`)
      .then(res => {
        // findIndex - función para encontrar el index en el array notas comparado con res
        const index = this.names.findIndex(item => item._id == res.data._id);
        // Operación para actualizar el array (en el front) sin sobrecargas la app
        this.names.splice(index, 1);
        commit('editFrontName', )
        this.getAlert(
          "success",
          `EL NOMBRE ${res.data.title} HA SIDO ACTUALIZADO`
        );
      })
      .catch(e => {
        console.log(e.response);
      });
  }
};