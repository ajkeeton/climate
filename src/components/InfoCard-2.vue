<template>
  <div>
    <v-tabs class="elevation-3">
      <v-tab class="caption br">
        <v-icon color="cyan" left>info</v-icon>
        Plot
      </v-tab>
      <v-tab class="caption br ">
        <v-icon color="cyan" left>more</v-icon>
        See sources
      </v-tab>

      <!--
      <v-tab v-if="card.args"  class="caption br">
        <v-icon  color="cyan" left>people</v-icon>
        Arguments
      </v-tab>
      -->
      <v-tab-item>
        <v-card flat>
          <v-img :src="card.cover_image" />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card tile>
          <v-card-text>
             <v-list dense>
               <v-list-item-content class="caption" v-for="source in card.source" :key="source._id" v-html="source"/>
             </v-list>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <!--
      <v-tab-item v-if="card.args" >
        <v-card flat>
          <ul>
            <li v-for="arg in card.args" v-html="arg" :key="arg"/>
          </ul>
        </v-card>
      </v-tab-item>
      -->
    </v-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: [ "card" ]
};
</script>

<style scoped>
.br {
  border-right: 1px solid;
}
</style>
