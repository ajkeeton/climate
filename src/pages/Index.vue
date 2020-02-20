<template>
  <Layout>
    <v-container fluid>
      <v-row>
        <v-col cols=8>
        <v-row justify="center">
          <v-col cols="4" sm="12" md="6">
            <v-card flat>
              <v-card-title>The claim</v-card-title>
              <hr />
              <v-card-text>
                <ul>
                  <li>The global climate is heating faster than is natural</li>
                  <li>Man-made CO2 emissions are to blame</li>
                  <li>We will face disaster if we don't act</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="5" sm="12" md="6">
            <v-card-title> Is it nonsense?</v-card-title>
            <hr />
            <v-card-text>
              <p>
                This page hosts a collection of arguments, counter arguments, with
                the occasional critique and observation.
              </p>
              <p>The data is sourced. The arguments are too.</p>
              <p><strong>tldr;</strong> Conservative media is lying</p>
            </v-card-text>
          </v-col>
        </v-row>
        <hr  />
        <v-row
          dense
          align="stretch"
          justify="center"
          v-for="n in len_div_3()"
          :key="n"
        >
          <v-col cols="12" md="4" v-for="arg in next_at_offset(n)" :key="arg.id">
            <v-card class="ma-2 pa-2" hover>
              <v-card-title style="word-break: break-word">{{ arg.node.title }}</v-card-title>
              <v-card-text >
                {{ arg.node.title }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        </v-col>
        <v-col cols="4">
          "portraits" / players 
          in the news
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>
<!--
<page-query>
query {
  pageContent(id: 1) {
    id
    title
    cover_image
    content
  }
}
</page-query>
-->

<static-query>
query {
  args: allArgument {
    edges {
      node {
        id
        title
        cover_image
      }
    }
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      args: [
        "1 Lorem ipsum dolor sit amet, consectetur ",
        "2 Lorem ipsum dolor sit amet, consectetur ",
        "3 Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ",
        "4 Lorem ipsum dolor sit amet, consectetur ",
        "5 Lorem ipsum dolor sit amet, consectetur ",
        "6 adipisicing elit. Placeat dolor odit sunt! Vel placeat hic ",
        "7 sint eos debitis mollitia. Temporibus animi quae maiores impedit at atque quos optio eveniet laudantium"
      ]
    };
  },
  methods: {
    len_div_3() {
      console.log(this.$static.args.edges.length)
      //return Math.ceil(this.args.length / 3);
      return Math.ceil(this.$static.args.edges.length / 3);
    },
    next_at_offset(n) {
      n -= 1;
      return this.$static.args.edges.slice(n * 3, n * 3 + 3);
    }
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>
