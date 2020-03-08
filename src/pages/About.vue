<template>
  <Layout>
    <v-card flat>
        <!--<v-card-title class="card_title">The real data</v-card-title>-->

        <v-container fluid class="ma-1 pa-1">
          <v-row justify="center" class="align-center">
            <v-col xs="12" md="8">
              <v-card flat>
                <v-card-text>
                  <h2>
                    Have you ever seen the real data that is at the heart of the
                    climate change debate?
                  </h2>
                  <br />
                  <p>
                    The plots below are all generated from real data and links
                    to the sources are provided. The papers cited provide details 
                    about how the data was collected and provide their own sources 
                    for you to learn more.
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
       </v-container>
     </v-card>
     <v-card flat>

      <v-card-title class="card_title" v-html="years_130.title" />
        <v-container fluid class="ma-1 pa-1">
          <v-row class="align-center">
            <v-col xs="12" sm="12" md="4">
              <v-card-text>
                <p v-html="years_130.content"></p>
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
                <p v-html="years_1000.content"></p>
              </v-card-text>
            </v-col>

            <v-col xs="12" sm="12" md="8">
              <InfoCard-2 :card="years_1000" />
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <v-container fluid class="ma-1 pa-1">
        <v-row justify="center" class="align-center">
          <v-col xs="12" md="10">
          <v-card flat>
            <v-card-title class="card_title">Why we think it's CO2</v-card-title>
            <v-card-text>
              <p>
                The link between CO2 and atmospheric temperature has been known
                since at least 1865 when Eunice Foote published the article
                <a
                  href="https://books.google.co.uk/books?id=6xhFAQAAMAAJ&pg=PA382&fbclid=IwAR3VU0N7V8F1rRC07kJ8QjcRzlqDgIw1tGPEhoRmS8-qoW8MPDq8gvF-eRM#v=onepage&q&f=false"
                  >"Circumstances affecting the Heat of the Sun's Rays"</a
                >
                Foote measured how air trapped in a cylinder changed temperature in
                response to sunlight. Her fingings showed that increasing CO2
                concentrations directly correlated to increased heating.
              </p>
              <p>This was before any global warming controversy</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      </v-container>

        <v-card-title class="card_title" v-html="years_800k.title" />

        <v-container fluid class="ma-1 pa-1">
          <v-row class="align-center">
            <v-col xs="12" sm="12" md="4">
              <v-card-text>
                <p v-html="years_800k.content"></p>
              </v-card-text>
            </v-col>

            <v-col xs="12" sm="12" md="8">
              <InfoCard-2 :card="years_800k" />
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <v-container fluid class="ma-1 pa-1">
        <v-row justify="center" class="align-center">
          <v-col xs="12" md="10">
          <v-card flat>
            <v-card-title class="card_title">Why we think it's man-made</v-card-title>
            <v-card-text>
              <p>
                Temperature measurements indicate that abnormal changes began around the 
                beginning of the industrial revolution, when man-kind began burning massive
                amounts of fossil fuels. But correlation does not mean causation.
              </p>

              <p>
                Carbon naturally occurs in three different isotopes, 12C, 13C, and 14C.
                14C is produced in the upper atmosphere when neutrons from cosmic 
                radiation impact 13C. 14C eventually makes its way to the surface and 
                has a halflife of 5,700 years.
              </p>

              <p>
                Using bubbles trapped in ice cores, we can measure historical atmospheric 
                carbon isotope ratios. An excellent paper on the procedure and measurements 
                from one such ice core is <a href=https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/jgrd.50668>
                A revised 1000 year atmospheric δ13C‐CO2 record from Law Dome and South Pole, Antarctica</a>
              </p>

              <p>
                Fossil fuels, being underground, do not have their 14C levels replenished.
                Due to radioactive decay, the amount of 14C in fossil fuels is roughly
                1000% lower than above ground measurements. Burning fossil fuels releases CO2
                back into the atmosphere. Thus, fossil fuel emissions should lead to a
                decrease in atmospheric 14C levels.
                <a href=https://www.esrl.noaa.gov/gmd/ccgg/isotopes/c14tellsus.html>
                And that's exactly what has been measured.</a>
              </p>

              <p>
                One could also make the argument that the source of these changes is an increase in volcanic
                activity. According to National Museum of Natural History’s Global Volcanism Program
                <a href="https://volcano.si.edu/faq/index.cfm?question=historicalactivity">
                there is no evidence of increased volcanic activity</a>.
              </p>

              <p>
                Furthermore, one of the largest volcanos in recent history, The Holuhraun
                <a href="https://en.vedur.is/about-imo/news/final-estimates-of-the-emissions-from-the-holuhraun-eruption-based-on-ground-based-measurements-now-published">
                released roughly 5.1 million tons of CO2 since 1978</a>. Compare that with the US, which 
                <a href="https://www.statista.com/statistics/183943/us-carbon-dioxide-emissions-from-1999/">
                releases over 5 *billion* tons per year</a>
              </p>
              </v-card-text>

             <v-card-title class="card_title">More data</v-card-title>
              <v-card-text>  
                <p>
                If you're interested in "big data" or datamining, <a href=https://cloud.google.com/public-datasets/weather>Google Cloud</a> 
                and <a href=https://aws.amazon.com/blogs/big-data/visualize-over-200-years-of-global-climate-data-using-amazon-athena-and-amazon-quicksight/
      >Amazon Web Services</a> both host the GHCN Daily dataset. 
                The GHCH daily includes 100,000 stations from 180 countries with measurements extending back to 1763. 
                </p>
                <p>
                A list of datasets can also be found at <a href=http://www.realclimate.org/index.php/data-sources/>RealClimate.org</a>
                </p>
            </v-card-text>
            <v-card-title class="card_title">In summary</v-card-title>
            <v-card-text>
              <p>
              This was only an introduction to the science supporting the theory of man-made (anthropogenic) climate change.
              </p>
              <p>
              While researching the material, one thing stood out: if the "denialists" have some comparable
              material, why haven't they made it easier to find? The fossil fuel companies
              combined and conservative think tanks, that already fund denialists,
              could surely have afforded it.
              </p>
            </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

     
        <!--



          <v-card-text>
          
            Do climate change deniers have anything at all that is comparable?
            
            If man-made climate change isn't real, or isn't a threat, the world
            needs to know.
            
            But if it is a real threat, the world needs to act.
            Make the world a better place by getting informed and getting
            involved. 


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

      <!--
      <ul>
        <li v-for="{ node } in $page.posts.edges" :key="node._id">
          <router-link :to="node.path">
            <h2 v-html="node.title" />
          </router-link>
          <span v-html="node.date" />
          <div v-html="node.description" />
        </li>
      </ul>-->
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
  color: rgba(0, 0, 0, 0.8);
}
.border {
  border: 2px solid;
}
</style>
