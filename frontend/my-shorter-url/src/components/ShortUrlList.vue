<template>
  <section>
      <div class="flex column sb url-list">
        <short-url-preview
          v-for="(url, idx) in urls"
          :key="idx"
          :url="url"
        />
    </div>
  </section>
</template>

<script>
import ShortUrlPreview from "./ShortUrlPreview.vue"

export default {
  name: "ShortUrlList",
  props: ["urls"],
  components:{
    ShortUrlPreview
  }
};
</script>