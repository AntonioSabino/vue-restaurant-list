<template>
  <nav class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Adicionar Restaurante</router-link>
    <router-link to="/update">Editar Restaurante</router-link>
    <router-link v-on:click="logout" to="/login">Sair</router-link>
  </nav>
</template>

<script>
export default {
  name: "HeaderApp",
  methods: {
    logout() {
      localStorage.clear();
    },
  },
};
</script>

<style>
.nav {
  background: #333;
  overflow: hidden;
}
.nav a {
  float: left;
  color: #f2f2f2;
  padding: 14px 16px;
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 4px;
  border-top: 3px solid #333;
  border-bottom: 3px solid #333;
  border-radius: 4px;
}
.nav a:hover {
  background: #ddd;
  color: #333;
}
</style>