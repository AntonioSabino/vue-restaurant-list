<template>
  <nav class="nav">
    <a href="#">Home</a>
    <a href="#">Adicionar Restaurante</a>
    <a href="#">Editar Restaurante</a>
    <a href="#">Sair</a>
  </nav>
</template>

<script>
export default {
  name: "HeaderApp",
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