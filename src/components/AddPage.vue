<template>
  <HeaderApp />
  <h1>Pagina de Add Restaurante</h1>
</template>

<script>
import HeaderApp from "./HeaderApp.vue";
export default {
  name: "AddPage",
  components: {
    HeaderApp,
  },
  mounted() {
    const user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>