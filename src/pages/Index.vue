<template>
  <Layout>
    <v-container fluid>
      <v-row wrap class="justify-center align-center">
        <v-col cols="12">
          <v-card tile>
            <v-card-subtitle class="text-center"
              >If the denialists are right, they're doing something wrong
            </v-card-subtitle>
            <v-divider />

            <v-row v-for="n in num_rows" :key="n" class="justify-center">
              <v-col
                xs="12"
                sm="6"
                md="4"
                lg="3"
                v-for="edge in next_at_offset(n)"
                :key="edge._id"
              >
              <generic-post :card="edge.node"/>
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
  posts: allPost(perPage: 6, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        cover_image
        title
        subtitle
        id
        description
        path
      }
    }
  }
  tags: allTag {
    edges {
      node {
        id,
        path
      }
    }
  }
}
</page-query>

<script>
import nasa_gis from "@/assets/images/nasa-gistemp.png";
import { Pager } from 'gridsome'
import GenericPost from "@/components/GenericPostCard.vue";

export default {
  data() {
    return {
      num_rows: 1,
      num_cols: 1,
      graph: nasa_gis
    };
  },
  components: {
    Pager,
    GenericPost
  },
  methods: {
    set_num_vrows() {
      // https://vuetifyjs.com/en/customization/breakpoints

      if (this.$vuetify.breakpoint.xs === true) {
        // console.log("X SMALL")
        this.num_rows = this.$page.posts.edges.length;
        this.num_cols = 1;
      } else if (this.$vuetify.breakpoint.sm === true) {
        // console.log("SMALL")
        this.num_cols = 2;
        this.num_rows = Math.ceil(this.$page.posts.edges.length / 2);
      } else if (this.$vuetify.breakpoint.md === true) {
        // console.log("MD")
        this.num_cols = 3;
        this.num_rows = Math.ceil(this.$page.posts.edges.length / 3);
      } else {
        this.num_cols = 4
        this.num_rows = Math.ceil(this.$page.posts.edges.length / 4);
      }
      // console.log("num rows/cols:", this.num_rows, this.num_cols);
    },
    next_at_offset(n) {
      n -= 1;
      // console.log("from/to", n * this.num_cols, n * this.num_cols + this.num_cols, "out of", this.$page.posts.edges.length)

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
