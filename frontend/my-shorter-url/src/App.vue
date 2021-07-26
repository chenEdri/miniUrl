<template>
  <div id="app">
    <div>
      <Nav />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
// import ShortUrlList from "./components/ShortUrlList.vue";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    // ShortUrlList,
    Nav,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
