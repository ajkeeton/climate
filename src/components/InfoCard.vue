<template>
    <v-card >
      <v-list-item-title class="headline" v-html="card.title"/>
      <v-card-subtitle v-html="card.date"/>
      <v-img v-if="card.cover_image" :src="card.cover_image"></v-img>
      <v-card-text v-html="card.content" />
    </v-card>
</template>

<script>
export default {
    name: 'InfoCard',
    props: [ 'card' ]
}
</script>

<style>

</style>