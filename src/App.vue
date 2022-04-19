<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  width: 70px;
}

.register,
.login,
.add {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.register input,
.login input,
.add input,
button {
  border: 1px solid skyblue;
  border-radius: 3px;
}
.register input,
.login input,
.add input {
  height: 25px;
  width: 300px;
  padding-left: 10px;
  margin: 5px;
}
.register input:focus,
.login input:focus,
.add input:focus {
  border-color: rgb(23, 158, 211);
  outline: 0;
}
.register button,
.login button,
.add button {
  background: skyblue;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  margin: 20px;
  height: 29px;
  width: 314px;
}
.register button:active,
.login button:active,
.add button:active {
  background: rgb(23, 158, 211);
}
</style>
