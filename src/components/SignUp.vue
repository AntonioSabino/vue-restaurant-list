<template>
  <img class="logo" src="../assets/logo.png" alt="" />
  <h1>Cadastre-se</h1>
  <div class="register">
    <input type="text" placeholder="Digite seu nome" />
    <input type="email" placeholder="Digite seu e-mail" />
    <input type="password" placeholder="Digite sua senha" />
    <button>Cadastrar</button>
  </div>
</template>

<script>
export default {
  name: "SignUp",
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