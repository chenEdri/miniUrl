<template>
  <section v-if="url">
    <div class="url-preview">
      <div class="flex border">
        <div @click="deleteUrl(url._id)">
          <font-awesome-icon :icon="['fa', 'trash']" class="trash cp" />
        </div>
        <div>{{ url.nickname }}</div>
      </div>
      <div class="cp url-link" @click="goToPage(url.src)">
        {{ url.shortUrl }}
      </div>
    </div>
  </section>
</template>


<script>
export default {
  props: ["url", "deleteUrl"],
  methods: {
    goToPage(src) {
      window.open(src, "_blank");
    },
  },
};
</script>