<template>
  <section class="fullscreen-layout url-container">
    <div class="flex justify-center">
      <div>
        <h2>My ShortUrls</h2>
        <div class="button-urls">
          <button class="classic-btn ml25" @click="changeDb('all')">all</button>
          <button class="classic-btn" @click="changeDb('mg')">Mongo DB</button>
          <button class="classic-btn" @click="changeDb('sql')">SQL DB</button>
        </div>
        <short-url-list v-if="urls.length > 0" :urls="urls" />
      </div>
      <short-url-form :currentDb="dbName" :userId="userId"/>
    </div>
  </section>
</template>

<script>
import ShortUrlList from "../components/ShortUrlList.vue";
import ShortUrlForm from "../components/ShortUrlForm.vue";
// @ is an alias to /src

export default {
  name: "UrlApp",
  data() {
    return {
      urls: [],
      dbName: "all",
      userId: null,
    };
  },
  async created() {
    const id = this.$route.params.id;
    this.userId = id;
    await this.loadUrls(this.dbName);
  },
  methods: {
    //asynchronus functions
    async loadUrls(dbName) {
      const id = this.userId;
      const _urls = await this.$store.dispatch({
        type: "loadUrls",
        dbName,
        id,
      });
      console.log("urls-", _urls);
      this.urls = _urls;
    },
    async changeDb(dbName) {
      await this.loadUrls(dbName);
    },
  },
  components: {
    ShortUrlList,
    ShortUrlForm,
  },
};
</script>
