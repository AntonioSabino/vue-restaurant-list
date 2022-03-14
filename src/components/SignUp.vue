<template>
  <img class="logo" src="../assets/logo.png" alt="" />
  <h1>Cadastre-se</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Digite seu nome" />
    <input type="email" v-model="email" placeholder="Digite seu e-mail" />
    <input type="password" v-model="password" placeholder="Digite sua senha" />
    <button v-on:click="signUp">Cadastrar</button>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      const result = await axios.post("http://localhost:3000/user", {
        email: this.email,
        name: this.name,
        password: this.password,
      });

      console.log(result);
      if (result.status === 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  mounted() {
    const user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  },
};
</script>

<style>
</style>