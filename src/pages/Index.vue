<template>
  <Layout>
    <v-container fluid>
      <v-row v-if="false" wrap class="justify-center align-center">
        <v-col xs="3" lg="3" class="justify-center">
          <div
            class="grey lighten-5"
            :style="
              'background: url(' +
                graph +
                ') center no-repeat; justify-content: center; display: flex; align-items: center;'
            "
          >
            <!--<g-image
              src="~/assets/images/nasa-gistemp.png"
              width="250"
              height="150"
              quality="100"
            />
            <v-card-actions>-->
            <v-btn dark color="cyan">
              The data<v-icon>chevron_right</v-icon>
            </v-btn>
            <!--</v-card-actions>-->
          </div>
        </v-col>
        <v-col xs="3" lg="3">
          <v-card tile class="card-outter">
            <g-image
              src="~/assets/images/volcano.jpg"
              width="250"
              height="150"
              quality="100"
              fit="cover"
            />
            <v-card-text>dsfasdfs dfas dfas fasdf<br /> </v-card-text>
            <v-card-actions class="button-top">
              <v-btn dark color="cyan">
                common arguments<v-icon>chevron_right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row wrap class="justify-center align-center">
        <v-col>
          <v-card> </v-card>
        </v-col>
      </v-row>

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
                :key="edge.id"
              >
                <v-card :to="edge.node.path" class="card-outer ma-4">
                  <v-img
                    class="white--text"
                    height="200px"
                    :src="edge.node.cover_image.src"
                  >
                  </v-img>
                  <v-card-title
                    class="font-weight-regular title mb-1 nobreak"
                    v-html="edge.node.title"
                  />
                  <v-card-subtitle class="pb-2 caption" v-html="edge.node.subtitle" />

                  <v-divider class="mx-4" />
                  <v-card-text
                    class="text--primary"
                    v-html="edge.node.description"
                  />
                  <v-card-actions class="card-actions">
                    <v-spacer />
                    <v-btn class="mx-2" dark large color="cyan">
                      Read More<v-icon>chevron_right</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
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
  args: allArgument {
    edges {
      node {
        id
        title
        cover_image
      }
    }
  },
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

export default {
  data() {
    return {
      num_rows: 1,
      num_cols: 1,
      graph: nasa_gis
    };
  },
  components: {
    Pager
  },
  methods: {
    set_num_vrows() {
      // https://vuetifyjs.com/en/customization/breakpoints

      console.log(this.$vuetify.breakpoint);
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
      console.log("from/to", n * this.num_cols, n * this.num_cols + this.num_cols, "out of", this.$page.posts.edges.length)

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
    title: "Hello, world!"
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
