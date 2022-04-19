<template>
  <HeaderApp />
  <h1>Pagina de Add Restaurante</h1>
  <form class="add">
    <input
      type="text"
      name="name"
      placeholder="Digite o nome"
      v-model="restaurant.name"
    />
    <input
      type="text"
      name="address"
      placeholder="Digite o endereço"
      v-model="restaurant.address"
    />
    <input
      type="text"
      name="contact"
      placeholder="Digite o contato"
      v-model="restaurant.contact"
    />
    <button type="button" v-on:click="addRestaurant">
      Adicionar Restaurante
    </button>
  </form>
</template>

<script>
import HeaderApp from "./HeaderApp.vue";
import axios from "axios";
export default {
  name: "AddPage",
  components: {
    HeaderApp,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async addRestaurant() {
      console.log(this.restaurant);
      const result = await axios.post("http://localhost:3000/restaurants", {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      if (result.status === 201) {
        this.$router.push({ name: "HomePage" });
      }
      console.log(result);
    },
  },
  mounted() {
    const user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>