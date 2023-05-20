<template>
  <div class="navbar">
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
    justify-content: flex-end;
  }

  .navbar nav {
    padding: 30px;
  }
  
  .navbar nav a {
    font-weight: bold;
    color: #fff;
  }
  
  .navbar nav a.router-link-exact-active {
    color: #2c3e50;
  }

  .navbar nav nav-item {
    padding: 5px;
  }
</style>