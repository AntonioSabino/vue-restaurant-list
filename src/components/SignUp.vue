<template>
  <img class="logo" src="../assets/logo.png" alt="" />
  <h1>Cadastre-se</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Digite seu nome" />
    <input type="email" v-model="email" placeholder="Digite seu e-mail" />
    <input type="password" v-model="password" placeholder="Digite sua senha" />
    <button v-on:click="signUp">Cadastrar</button>
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
};
</script>

<style>
.logo {
  width: 70px;
}

.register {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.register input,
button {
  border: 1px solid skyblue;
  border-radius: 3px;
}
.register input {
  height: 25px;
  width: 300px;
  padding-left: 10px;
  margin: 5px;
}
.register input:focus {
  border-color: rgb(23, 158, 211);
  outline: 0;
}
.register button {
  background: skyblue;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  margin: 20px;
  height: 29px;
  width: 314px;
}
.register button:active {
  background: rgb(23, 158, 211);
}
</style>