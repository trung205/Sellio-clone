import { createStore } from "vuex";

const productCartModule = {
  namespaced: true,
  state() {
    return {
    };
  },
  mutations: {
   
  },
  actions: {
   
  },
  getters: {
    getCart: (state) => {
      return state;
    },
  },
};
export default createStore({
  modules: {
    productCart: productCartModule,
  },
});