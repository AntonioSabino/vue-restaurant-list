<template>
  <HeaderApp />
  <h1>Pagina de Home</h1>
</template>

<script>
import HeaderApp from "./HeaderApp.vue";
export default {
  name: "HomePage",
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