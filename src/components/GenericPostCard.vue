<template>
  <v-card :to="card.path" class="card-outer ma-4">
    <v-img class="white--text" height="200px" :src="card.cover_image.src">
    </v-img>
    <v-card-title
      class="font-weight-regular title mb-1 nobreak"
      v-html="card.title"
    />
    <v-card-subtitle class="pb-2 caption" v-html="card.subtitle" />

    <v-divider class="mx-4" />
    <v-card-text class="text--primary" v-html="card.description" />
    <v-card-actions class="card-actions">
      <v-spacer />
      <v-btn class="mx-2" dark large color="cyan">
        Read More<v-icon>chevron_right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "GenericPost",
  data() { 
    return {} 
  },
  props: [
    "card"
  ]

};
</script>

<style scoped>
.card-outter {
  //position: relative;
  //padding-bottom: 50px;
}
.card-actions {
  //position: absolute;
  //bottom: 10px;
  //right: -25px;
}
.button-top {
  //position: absolute;
  //bottom: 5px;
  //right: 5px;
}
.nobreak {
  word-break: break-word;
}
</style>