<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import Header from "./components/sections/Header.vue";
export default {
  name: "App",
  components: { Header },
};
</script>

<style>

</style>
