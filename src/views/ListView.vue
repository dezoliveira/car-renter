<template>
  <div class="list">
    <h1>Car List</h1>
    <div class="card" v-for="car in cars" :key="car.codigo">
      <h1>{{ car.codigo }}</h1>
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
      return placa
    }
  }
}
</script>

<style>
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>