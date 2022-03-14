<template>
  <img class="logo" src="../assets/logo.png" alt="" />
  <h1>Conecte-se</h1>
  <div class="login">
    <input type="email" v-model="email" placeholder="Digite seu e-mail" />
    <input type="password" v-model="password" placeholder="Digite sua senha" />
    <button>Entrar</button>
    <p>
      <router-link to="/sign-up">Criar Conta</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>