<template>
  <section v-if="url">
    <div class="url-preview">
      <div class="flex">
        <div>{{ url.nickname }}</div>
      </div>
      <div class="cp url-link" @click="goToPage(url.src)">
        {{ url.shortUrl }}
      </div>
      <div class="flex">
        <div @click="deleteUrl(url._id)">
          <font-awesome-icon :icon="['fa', 'trash']" class="trash cp" />
        </div>
        <div @click="openUrlEditor(url)">
          <font-awesome-icon :icon="['fa', 'pen']" class="trash cp" />
        </div>
        <div @click="openD()">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="trash cp" />
        </div>
      </div>
      <short-url-dialog 
      :shortUrl="url.shortUrl"
      :isOpen="openDialog"
      v-if="openDialog"
      />
    </div>
  </section>
</template>


<script>
import ShortUrlDialog from "../components/ShortUrlDialog.vue";
export default {
  props: ["url", "deleteUrl", "openUrlEditor"],
  data() {
    return {
      openDialog: false,
    };
  },
  methods: {
    goToPage(src) {
      window.open(src, "_blank");
    },
    openD(){
      this.openDialog = true;
    }
  },
  components: {
    ShortUrlDialog,
  },
};
</script>