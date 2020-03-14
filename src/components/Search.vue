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
      prepend-inner-icon="search"
      @keydown.enter="submitted"
    />
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-actions>
          <v-spacer /><v-btn top @click="dialog = false">Dismiss</v-btn>
        </v-card-actions>

        <v-card-subtitle class="headline">
          <span v-if="searchResults.length">Search results</span>
          <span v-if="!searchResults.length">No search results</span>
        </v-card-subtitle>
        <v-list dense>
          <template v-for="(res, index) in searchResults">
            <v-divider />
            <v-list-item two-line :to="res.path"
              ><!--v-for="res in searchResults" :key="res.id"-->
              <v-list-item-content>
                <v-list-item-title>
                  {{ res.title }}
                </v-list-item-title>
                <v-list-item-subtitle v-if="res.category"
                  >Filed under
                  <span class="font-italic">{{
                    res.category
                  }}</span></v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchTerm: "",
    dialog: false
  }),
  methods: {
    submitted() {
      if (!this.searchTerm || this.searchTerm.length < 3) return;
      this.dialog = true;
    }
  },
  computed: {
    searchResults() {
      const searchTerm = this.searchTerm;
      if (searchTerm.length < 3) return [];
      return this.$search.search({ query: searchTerm, limit: 5 });
    }
  }
};
</script>

<style scoped>
.tsearch {
  //top: 20px;
}
</style>
