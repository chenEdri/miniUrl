<template>
  <section>
      <div class="url-list">
        <div class="url-headline">
              <h4>Nickname</h4>
              <h4>Shortcut</h4>
        </div>
        <short-url-preview
          v-for="(url, idx) in urls"
          :key="idx"
          :url="url"
          :deleteUrl="deleteUrl"
          :openUrlEditor="openUrlEditor"
        />
    </div>
  </section>
</template>

<script>
import ShortUrlPreview from "./ShortUrlPreview.vue"

export default {
  name: "ShortUrlList",
  props: ["urls","deleteUrl", "openUrlEditor"],
  components:{
    ShortUrlPreview
  }
};
</script>