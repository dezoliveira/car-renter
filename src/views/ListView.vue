<template>
  <div class="list">
    <h1>Car List</h1>
    
    <!-- <div class="header">
      <h2>Codigo</h2>
      <h2>Descrição</h2>
      <h2>Placa</h2>
      <h2>Cor</h2>
      <h2>Ano</h2>
    </div>
    <div class="card" v-for="car in cars" :key="car.codigo">
      <h3>{{ car.codigo }}</h3>
      <p>{{ car.descricao }}</p>
      <p>{{ formataPlaca(car.placa) }}</p>
      <p>{{ car.cor }}</p>
      <p>{{ car.ano }}</p>
    </div> -->
    <table class="table">
      
      <thead>
        <th>Codigo</th>
        <th>Descrição</th>
        <th>Placa</th>
        <th>Cor</th>
        <th>Ano</th>
        <th>Reserva</th>
      </thead>

      <tbody>
        <tr v-for="car in cars" :key="car.codigo">
          <td><h3>{{ car.codigo }}</h3></td>
          <td><p>{{ car.descricao }}</p></td>
          <td><p>{{ formataPlaca(car.placa) }}</p></td>
          <td><p>{{ car.cor }}</p></td>
          <td><p>{{ car.ano }}</p></td>
          <td><p><button>Alugar</button></p></td>
        </tr>
      </tbody>

    </table>
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

  methods: {
    formataPlaca(placa){
      let first = ''
      let last = ''
      if(placa) {
        first = placa.substring(0, 3)
        last = placa.substring(3)
      }

      return `${first} - ${last}`
    }
  }
}
</script>

<style>
  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .list h1 {
    padding: 45px 0;
  }

  .table {
    width: 80%;
  }
  
  .table td, .table th {
    border: 1px solid black;
  }

  .table th {
    background-color: #42b983;
    color: #fff;
  }
</style>