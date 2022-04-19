<template>
  <HeaderApp />
  <h1>Olá {{ name }}, você está na página de Home</h1>
  <table border="1">
    <tr>
      <td>ID</td>
      <td>Nome</td>
      <td>Contato</td>
      <td>Endereço</td>
      <td>Actions</td>
    </tr>
    <tr v-for="restaurant in restaurants" :key="restaurant.id">
      <td>{{ restaurant.id }}</td>
      <td>{{ restaurant.name }}</td>
      <td>{{ restaurant.contact }}</td>
      <td>{{ restaurant.address }}</td>
      <td>
        <router-link :to="'/update/' + restaurant.id">Update</router-link>
        <button v-on:click="deleteRestaurant(restaurant.id)">Deletar</button>
      </td>
    </tr>
  </table>
</template>

<script>
import HeaderApp from "./HeaderApp.vue";
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  components: {
    HeaderApp,
  },
  methods: {
    async deleteRestaurant(id) {
      const result = await axios.delete(
        `http://localhost:3000/restaurants/${id}`
      );
      if (result.status === 200) {
        this.loadData();
      }
    },
    async loadData() {
      const user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      const result = await axios.get("http://localhost:3000/restaurants");
      this.restaurants = result.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>

<style>
td {
  width: 160px;
  height: 40px;
}
</style>