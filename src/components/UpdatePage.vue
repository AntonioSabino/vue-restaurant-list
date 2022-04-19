<template>
  <HeaderApp />
  <h1>Pagina de Update Restaurante</h1>
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
    <button type="button" v-on:click="UpdateRestaurant">
      Editar Restaurante
    </button>
  </form>
</template>

<script>
import HeaderApp from "./HeaderApp.vue";
import axios from "axios";
export default {
  name: "UpdatePage",
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
    async UpdateRestaurant() {
      const id = this.$route.params.id;
      const result = await axios.put(
        `http://localhost:3000/restaurants/${id}`,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        }
      );
      if (result.status === 200) {
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  async mounted() {
    const user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    const id = this.$route.params.id;
    const result = await axios.get(`http://localhost:3000/restaurants/${id}`);
    this.restaurant = result.data;
  },
};
</script>