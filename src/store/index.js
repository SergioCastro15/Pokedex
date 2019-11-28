import Vue from 'vue'
import Vuex from 'vuex'
import { getAllPokemons } from '../../pokemons';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemon: [],
  },
  mutations: {
    SET_POKEMON(state, data) {
      state.pokemon = data;
    },
  },
  actions: {
    async getListOfPokemon({ commit }) {
      const pokemon = await getAllPokemons();
      commit('SET_POKEMON', pokemon);
    }
  },
})
