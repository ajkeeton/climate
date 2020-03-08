<template>
  <div>
    <v-text-field
      label="search"
      hide-details
      v-model="searchTerm"
      class="tsearch"
      flat
      outlined
      type="text"
      placeholder="Search"
      solo-inverted
      dense
      prepend-inner-icon="search"/>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchTerm: ''
  }),
  computed: {
    searchResults () {
      const searchTerm = this.searchTerm
      if (searchTerm.length < 3) return []
      return this.$search.search({ query: searchTerm, limit: 5 })
    }
  }
}
</script>

<style scoped>
.tsearch {
  //top: 20px;
}
</style>