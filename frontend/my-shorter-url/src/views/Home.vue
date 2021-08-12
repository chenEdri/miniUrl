<template>
  <section>
    <div class="fullscreen-layout homepage">
      <div class="flex">
        <div class="jumbo-container">
          <h2 class="jumbo-header">Generate a Secured</h2>
          <h2 class="jumbo-header">Website Link</h2>
          <h4 class="jumbo-text">
            With our generator you can easily create and share a sequred
            web-link page to your friends
          </h4>
          <div class="hp-btn">
            <button @click="goAsDemo()" class="special-btn">
              Start Exploring
            </button>
            <!-- <button @click="goAsDemo()" class="special-btn">Demo</button> -->
          </div>
        </div>
        <div class="flex img-hp"></div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      user: null,
    };
  },
  created() {
    const user = this.$store.getters.getUser;
    console.log(user);
    this.user = user;
  },
  components: {},
  methods: {
    // synchronus functions
    goToUrlApp() {
      this.$router.push(`/url/${this.user._id}`);
    },
    async goAsDemo() {
      await this.$store.dispatch("login", {
        userName: "Chen Edri",
        email: "chenedri22@gmail.com",
        password: "12345",
      });
      this.goToUrlApp();
    },
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
};
</script>
