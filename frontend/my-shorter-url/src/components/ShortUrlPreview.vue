<template>
  <section v-if="url">
    <div class="flex url-preview">
        <div class="bold pr10 nickname">{{url.nickname}}</div>
        <div class="cp url-link" @click="goToPage(url.src)">{{url.shortUrl}}</div>
    </div>
  </section>
</template>


<script>
export default {
    props:["url"],
    methods:{
        goToPage(src){
            window.open(src,'_blank');
        }
    },
}
</script>