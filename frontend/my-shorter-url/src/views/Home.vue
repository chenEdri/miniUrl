<template>
  <section>
    <div class="fullscreen-layout">
      <h1>Short-Url Generator</h1>
      <button
        @click="goToUrlApp()"
        class="flex align-self-center justify-self-center"
      >
        account page
      </button>
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
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
};
</script>
