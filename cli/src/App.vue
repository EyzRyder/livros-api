<script>
import Navbar from "./components/Navbar.vue";
import FormLivros from "./components/FormLivros.vue";

export default {
  name: "App",
  components: { Navbar, FormLivros },
};
</script>

<template>
  <main class="wrapper">
    <Navbar />
    <FormLivros />
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
