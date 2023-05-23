import { createStore } from 'vuex'

export default createStore({
  state: {
    cars: ['reer', 'asajsh']
  },
  getters: {
    getCars(data){
      return this.cars = data
    }
  },
  mutations: {
    fetchCars(state, cars) {
      console.log(cars)
      state.cars = cars
    }
  },
  actions: {
    async fetchCars( { commit } ) {
      await fetch('http://localhost:3001/api/carros', {
      headers: {
        method: 'GET',
        'Content-Type': 'application/json',
      }
    })
    .then((result) => result.json())
    //.then((data) => commit('fetchCars', data.result))
    .then((data) => commit('fetchCars', data.result))
    .catch((error) => error.json)
    }
  },
  modules: {
  }
})
