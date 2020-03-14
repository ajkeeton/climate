<template>
  <v-container class="ma-5 pa-1">
    <v-row justify="center" align="center">
      <v-col cols=12 sm=6 :md="lwidth">
        <slot name="left"/>
      </v-col>
      <v-col cols=12 sm=6 :md="rwidth">
        <slot name="right"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
      lwidth: {
        default: 6
      },
      rwidth: {
        default: 6
     }
  }
}
</script>

<style>

</style>