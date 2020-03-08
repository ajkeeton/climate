<template>
  <Layout>
    <v-container fluid>
      <v-row wrap class="justify-center align-center">
        <v-col cols="12">
          <v-card flat>
            <v-card-subtitle class="text-center">
              All data is from freely available public sources. Links below
            </v-card-subtitle>
            <v-divider />
          </v-card>
          <v-card flat>
            <v-row v-for="n in num_rows" :key="n" class="justify-center">
              <v-col
                xs="12"
                md="6"
                v-for="edge in next_at_offset(n)"
                :key="edge._id"
              >
              <InfoCard :card="edge.node" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-card flat>
                  <center>
                    <Pager :linkClass="'v-pagination v-pagination__navigation'" :info="$page.posts.pageInfo"/>
                  </center>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query($page:Int) {
  posts: allInfoCard(filter: { published: { eq: true }}, perPage: 6, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        cover_image
        title
        id
        description
        path
        source
        date
        content
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import InfoCard from "@/components/InfoCard.vue";

export default {
  data() {
    return {
      num_rows: 1,
      num_cols: 1,
    };
  },
  components: {
    Pager,
    InfoCard
  },
  methods: {
    set_num_vrows() {
      // https://vuetifyjs.com/en/customization/breakpoints

      if (this.$vuetify.breakpoint.xs === true) {
        this.num_rows = this.$page.posts.edges.length
        this.num_cols = 1
      } else if (this.$vuetify.breakpoint.sm === true) {
        this.num_cols = 1
        this.num_rows = this.$page.posts.edges.length
      } else if (this.$vuetify.breakpoint.md === true) {
        this.num_cols = 2;
        this.num_rows = Math.ceil(this.$page.posts.edges.length / 2);
      } else {
        this.num_cols = 2
        this.num_rows = Math.ceil(this.$page.posts.edges.length / 2);
      }
    },
    next_at_offset(n) {
      n -= 1;
      return this.$page.posts.edges.slice(
        n * this.num_cols,
        n * this.num_cols + this.num_cols
      );
    },
    onResize() {
      this.set_num_vrows();
    }
  },
  metaInfo: {
    title: "Home"
  },
  mounted() {
    this.set_num_vrows();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  }
};
</script>
