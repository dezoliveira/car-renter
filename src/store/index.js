import { createStore } from 'vuex'

export default createStore({
  state: {
    cars: []
  },
  getters: {

  },
  mutations: {
    loadCars(state, cars) {
      state.cars = cars
    }
  },
  actions: {
    async loadCars( { commit } ) {
      await fetch('http://localhost:3001/api/carros', {
      headers: {
        method: 'GET',
        'Content-Type': 'application/json',
      }
    })
    .then((result) => result.json())
    .then((data) => commit('loadCars', data.result))
    .catch((error) => error.json)
    }
  },
  modules: {}
})
