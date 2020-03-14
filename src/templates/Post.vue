<template>
  <Layout>
    <v-card max-width=800 class="px-10">
      <div class="imgfixed">
        <v-card-text>
          <VueRemarkContent />
        </v-card-text>
      </div>
    </v-card>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    content
  }
}
</page-query>

<script>
import YouTube from "~/components/YouTube.vue";

export default {
  components: { YouTube }
};
</script>

<style>
div.imgfixed .g-image {
  max-width: 80%;
  margin-left: 10%;
}
.border {
  border: 2px solid;
}
h1 {
  text-align: center;
  margin-bottom: 5px;
}
hr {
  text-align: center;
}

p {
  padding: 8px 5px 8px 5px;
}
</style>
