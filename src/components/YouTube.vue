<template>
  <v-card elevation=10>
     <LazyYoutubeVideo :src="path" />
  </v-card>
</template>

<script>
import "vue-lazy-youtube-video/dist/style.css";
import LazyYoutubeVideo from "vue-lazy-youtube-video";

export default {
  props: ["path", "classy"],
  components: {
    LazyYoutubeVideo
  },
  mounted() {
    console.log(this.path)
  }
}
</script>

<style>

</style>