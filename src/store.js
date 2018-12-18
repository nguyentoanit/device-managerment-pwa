import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userID: 0
  },
  getters: {
    getUserID: state => {
      return state.userID;
    }
  },
  mutations: {
    addUserID(state, userID) {
      state.userID = userID;
    },
    deleteUserID(state) {
      state.userID = 0;
    }
  }
});
