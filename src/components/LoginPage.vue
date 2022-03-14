<template>
  <img class="logo" src="../assets/logo.png" alt="" />
  <h1>Conecte-se</h1>
  <div class="login">
    <input type="email" v-model="email" placeholder="Digite seu e-mail" />
    <input type="password" v-model="password" placeholder="Digite sua senha" />
    <button v-on:click="login">Entrar</button>
    <p>
      <router-link to="/sign-up">Criar Conta</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const result = await axios.get(
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`
      );
      if (result.status === 200 && result.data.length) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "HomePage" });
      }
    },
  },
};
</script>