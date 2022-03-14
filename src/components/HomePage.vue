<template>
  <h1>Pagina de Home</h1>
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    const user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>