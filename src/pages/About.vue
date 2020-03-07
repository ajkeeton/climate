<template>
  <Layout>
    <v-card>
      <v-card>
        <!--<v-card-title class="card_title">The real data</v-card-title>-->
        
        <v-container fluid class="ma-1 pa-1">
          <v-row justify="center" class="align-center">
            <v-col xs="12" md="8">
              <v-card flat >
                <v-card-text>
                  <h2>Have you ever seen the real data that is at the heart of the
                  climate change debate?</h2>
                  <br/>
                  <p>Here you will find exactly that,
                  complete with links to the original source material. The plots
                  below are all generated from real data that you can validate
                  for yourself. The papers referenced here provide details about how
                  the data was collected and provide their own sources for you
                  to learn more.</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-divider/>

          <v-card-title class="card_title" v-html="years_130.title" />

          <v-row class="align-center">
            <v-col xs="12" sm="12" md="4">
              <v-card-text>
                <p v-html="years_130.content">
                </p>
              </v-card-text>
            </v-col>

            <v-col xs="12" sm="12" md="8">
              <InfoCard-2 :card="years_130" />
            </v-col>
          </v-row>
        </v-container>

        <v-card-title class="card_title" v-html="years_1000.title" />

        <v-container fluid class="ma-1 pa-1">
          <v-row class="align-center">
            <v-col xs="12" sm="12" md="4">
              <v-card-text>
                <p v-html="years_1000.content">
                </p>
              </v-card-text>
            </v-col>

            <v-col xs="12" sm="12" md="8">
              <InfoCard-2 :card="years_1000" />
            </v-col>
          </v-row>
        </v-container>

        <v-divider/>

        <v-card-text>
          <h2>Have you ever seen the real data that is at the heart of the
          climate change debate?</h2>
          <br/>
          <p>Here you will find exactly that,
          complete with links to the original source material. The plots
          below are all generated from real data and links are provided so 
          you can validate for yourself. The papers referenced here provide 
          details about how the data was collected and provide their own sources 
          for you to learn more.</p>
        </v-card-text>
        <!--
        <v-card-title class="card_title" v-html="years_800k.title" />

        <v-container fluid class="ma-1 pa-1">
          <v-row class="align-center">
            <v-col xs="12" sm="12" md="4">
              <v-card-text v-html="years_800k.content" />
            </v-col>

            <v-col xs="12" sm="12" md="8">
              <InfoCard-2 :card="years_800k" />
            </v-col>
          </v-row>
        </v-container>
        -->
      </v-card>

      <ul>
        <li v-for="{ node } in $page.posts.edges" :key="node._id">
          <router-link :to="node.path">
            <h2 v-html="node.title" />
          </router-link>
          <span v-html="node.date" />
          <div v-html="node.description" />
        </li>
      </ul>
    </v-card>
  </Layout>
</template>

<page-query>
query {
  posts: allInfoCard(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        description
        cover_image
        path
        slug
        content
        source
        args
      }
    }
  }
}
</page-query>

<script>
import InfoCard2 from "@/components/InfoCard-2.vue";

export default {
  metaInfo: {
    title: "About"
  },
  data() {
    return {
      years_130: "",
      years_1000: "",
      years_800k: "",
      problems_paleo: "",
      outlier: ""
    };
  },
  components: {
    InfoCard2
  },
  methods: {
    slug(i) {
      try {
        return this.$page.posts.edges[i].node.slug;
      } catch {
        return "";
      }
    }
  },
  mounted() {
    /*
      XXX
      There absolutely has to be a better way to do this...
      Leaving it as this for now. Gridsome should optimize it out anyway */
    for (const e in this.$page.posts.edges) {
      switch (this.slug(e)) {
        case "130-years":
          this.years_130 = this.$page.posts.edges[e].node;
          break;
        case "1000-years":
          this.years_1000 = this.$page.posts.edges[e].node;
          break;
        case "problems-paleo":
          this.problems_paleo = this.$page.posts.edges[e].node;
          break;
        case "800k-years":
          this.years_800k = this.$page.posts.edges[e].node;
          break;
        case "outlier-context":
          this.outlier = this.$page.posts.edges[e].node;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
.card_title {
  padding-bottom: 2px;
}
.border {
  border: 2px solid;
}
</style>
