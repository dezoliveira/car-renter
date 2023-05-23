<template>
  <div class="list">
    <h1>Car List</h1>
    <div class="card" v-for="car in cars" :key="car.codigo">
      <h2>{{ car.codigo }}</h2>
      <p>{{ car.descricao }}</p>
      <p>{{ formataPlaca(car.placa) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListView',
  components: {

  },

  data() {
    return {

    }
  },

  computed: {
    cars() {
      return this.$store.state.cars
    }
  },

  created() {
    return this.$store.dispatch('fetchCars')
  },

  methods: {
    formataPlaca(placa){
      let first = placa.substring(0, 3)
      let last = placa.substring(3)
      return `${first} - ${last}`
    }
  }
}
</script>

<style>
  .list h1 {
    padding: 45px 0;
  }
  
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>