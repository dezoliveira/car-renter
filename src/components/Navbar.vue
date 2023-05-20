<template>
  <div class="navbar">
    <span class="logo">
      <label class>RentCar</label>
      <i>
        <fa icon="car-side" />
      </i>
    </span>
    <nav>
      <nav-item>
        <router-link to="/">Home</router-link>
      </nav-item>
      <nav-item>
        <router-link to="/about">About</router-link>
      </nav-item>
      <nav-item>
        <router-link to="/view">View</router-link>
      </nav-item>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
}
</script>

<style scoped>
  .navbar {
    background-color: #42b983;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .navbar .logo {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .navbar .logo label {
    font-size: 20px;
    color: #fff;
  }

  .navbar .logo i {
    font-size: 32px; 
    color: #fff;
  }

  .navbar nav {
    padding: 20px;
  }
  
  .navbar nav a {
    font-weight: bold;
    color: #fff;
  }
  
  .navbar nav a.router-link-exact-active {
    color: #2c3e50;
  }

  .navbar nav a:hover {
    color: #2c3e50;
  }

  .navbar nav nav-item {
    padding: 5px;
  }
</style>