<template>
  <HeaderApp />
  <h1>Pagina de Update Restaurante</h1>
</template>

<script>
import HeaderApp from "./HeaderApp.vue";
export default {
  name: "UpdatePage",
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