<template>
  <div class="list">
    <h1>Car List</h1>
    
    <div class="container">
      <div class="header">
        <h2>Codigo</h2>
        <h2>Media</h2>
        <h2>Descrição</h2>
        <h2>Placa</h2>
        <h2>Cor</h2>
        <h2>Ano</h2>
      </div>
      <div class="card" v-for="car in cars" :key="car.codigo">
        <h3>{{ car.codigo }}</h3>
        <p><img :src="`./images/${ car.descricao }.jpg`" /></p>
        <p>{{ car.descricao }}</p>
        <p>{{ formataPlaca(car.placa) }}</p>
        <p>{{ car.cor }}</p>
        <p>{{ car.ano }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListView',
  components: {

  },

  data() {

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
    },
  }
}
</script>

<style>
  .list h1{
    padding: 50px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .header, .card { 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    width: 80%;
  }

  .card {
    transition: 0.5s all ease;
  }

  .card:hover {
    background-color: #42b983;
    color: #fff;
  }

  .card img {
    max-width: 128px;
    min-height: 100px;
    padding: 15px;
    border-radius: 20%;
  }

</style>