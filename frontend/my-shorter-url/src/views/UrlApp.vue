<template>
  <section class="fullscreen-layout url-container">
    <div class="flex justify-center">
      <div class="mr25">
        <div class="button-urls flex">
          <h4 class="flex url-filter">Collections:</h4>
          <button
            v-bind:class="{ showOff: chosenBtn !== 'all' }"
            class="url-btn ml25"
            @click="changeDb('all')"
          >
            all
          </button>
          <button
            v-bind:class="{ showOff: chosenBtn !== 'mg' }"
            class="url-btn"
            @click="changeDb('mg')"
          >
            Mongo DB
          </button>
          <button
            v-bind:class="{ showOff: chosenBtn !== 'sql' }"
            class="url-btn"
            @click="changeDb('sql')"
          >
            SQL DB
          </button>
        </div>
        <short-url-list
          v-if="urls.length > 0"
          :urls="urls"
          :deleteUrl="deleteUrl"
          :openUrlEditor="openUrlEditor"
        />
      </div>
      <short-url-form 
      :currentDb="dbName" 
      :userId="userId"
      :urlToEdit="urlToEdit"
      :closeUrlEditor="closeUrlEditor"  />
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
      urlToEdit:null,
      dbName: "all",
      userId: null,
      chosenBtn: "all",
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
      this.chosenBtn = dbName;
      await this.loadUrls(dbName);
    },
    async deleteUrl(id) {
      const dbName = this.dbName;
      await this.$store.dispatch({
        type: "removeUrl",
        dbName,
        _id: id,
      });
    },
    openUrlEditor(url){
      this.urlToEdit = url;
    },
    closeUrlEditor(){
      this.urlToEdit = null;
    }
  },
  components: {
    ShortUrlList,
    ShortUrlForm,
  },
};
</script>
