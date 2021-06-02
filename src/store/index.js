import { createStore } from 'vuex'

import user from '../store/modules/user'
//import apiMethods from '../store/modules/apiMethods'

const store = createStore({
  modules: {
    user,
    //apiMethods
  },
})

export default store
