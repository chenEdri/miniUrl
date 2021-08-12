<template>
  <section>
    <div class="url-list">
      <div class="url-headline">
        <h4>Nickname</h4>
        <h4>Shortcut</h4>
        <div @click="toggleShowBtn" v-if="!showLessBtn" class=" cp toggle-list">less <span class="arrow"><img src="https://img.icons8.com/fluency-systems-filled/48/000000/long-arrow-up.png"/></span></div>
        <div @click="toggleShowBtn" v-else class="cp toggle-list">more <span class="arrow"><img src="https://img.icons8.com/material-rounded/24/000000/long-arrow-down.png"/></span></div>
      </div>
      <short-url-preview
        v-for="(url, idx) in urlsCompute"
        :key="idx"
        :url="url"
        :deleteUrl="deleteUrl"
        :openUrlEditor="openUrlEditor"
      />
    </div>
  </section>
</template>

<script>
import ShortUrlPreview from "./ShortUrlPreview.vue";

export default {
  name: "ShortUrlList",
  props: ["urls", "deleteUrl", "openUrlEditor"],
  data() {
    return {
      showLessBtn: false,
    };
  },
  components: {
    ShortUrlPreview,
  },
  computed: {
    urlsCompute(){
      return (this.showLessBtn)? this.$props.urls.slice(6):this.$props.urls;
    }
  },
  methods: {
    toggleShowBtn() {
      this.showLessBtn = !this.showLessBtn;
    },
  },
};
</script>