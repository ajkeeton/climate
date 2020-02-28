<template>
  <Layout>
    <v-container fluid class="grey lighten-5">
      <v-row>
        <v-col cols="9" sm="9">
          <v-card flat class="grey lighten-5" t>
            <v-card-text>
              <h1>
                The left says the science is settled. The right says it's not.
              </h1>
              <br />
              <p>
                Voters have an obligation to be informed and that means
                considering arguments from both sides.
              </p>
              <p>
                Are we really faced with a global crisis that threatens the well
                being of all of us, and our descendents? I set out hoping to set
                my mind at ease by finding evidence and solid arguments that the
                deniers were right.
              </p>
              <p>
                What I found were mounds of shallow arguments and
                misinformation.
              </p>
              <h2>
                If the conservatives are right, they're doing everything wrong
                to show it
              </h2>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3" sm="3">
          <v-card border class="grey lighten-5">
            <v-card-subtitle>Is it warming?</v-card-subtitle>
                <v-card-actions>
                  <v-btn color="orange" text>
                    What the science says >
                  </v-btn>
                </v-card-actions>
                <v-divider/>
                <v-card-actions>
                  <v-btn color="orange" text>
                    Arguments against >
                  </v-btn>
                </v-card-actions>
          </v-card>
          <!--
          <v-card border class="grey lighten-5">
            <v-card-title>Tags</v-card-title>
            <v-card-text>
              <ul>
                <li v-for="edge in $page.tags.edges" :key="edge.id">
                  <g-link :to="edge.node.path">{{ edge.node.id }}</g-link>
                </li>
              </ul>
            </v-card-text>
          </v-card>
          -->
        </v-col>
      </v-row>
      <v-divider />
      <v-row>
        <v-col cols="10">
          <v-row>
            <v-col cols="5" class="ma-2">
              <v-row class="my-2" v-for="edge in $page.posts.edges" :key="edge.id">
                <v-card  hover :to="edge.node.path">
                  <v-img
                    class="white--text"
                    height="200px"
                    :src="edge.node.cover_image.src"
                  >
                    <v-card-title v-html="edge.node.title" />
                    <v-card-subtitle
                      class="pb-0 white--text"
                      v-html="edge.node.subtitle"
                    />
                  </v-img>
                    <v-card-title v-html="edge.node.title" />
                    <v-card-subtitle
                      class="pb-0"
                      v-html="edge.node.subtitle"
                    />
                  <v-card-text
                    class="text--primary"
                    v-html="edge.node.description"
                  />
                  <v-card-actions>
                    <v-spacer />
                    <v-btn color="orange" text>
                      More
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-row>
            </v-col>
            <v-col cols="1"> </v-col>
            <v-col cols="5">
              <v-row class="my-2"  v-for="edge in $page.posts.edges" :key="edge.id">
                <v-card  hover :to="edge.node.path">
                    <v-card-title v-html="edge.node.title" />
                    <v-card-subtitle
                      class="pb-0"
                      v-html="edge.node.subtitle"
                    />
                  <v-img
                    class="white--text"
                    height="200px"
                    :src="edge.node.cover_image.src"
                  >
                  </v-img>
                  <v-card-text
                    class="text--primary"
                    v-html="edge.node.description"
                  />

                  <v-card-actions>
                    <v-spacer />
                    <v-btn color="orange" text>
                      More
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-row>
            </v-col>

            <!--
            <v-card flat :to="edge.node.path" height="200">
              <v-row align="center">
                <v-col cols="4" xs="12" md="4">
                  <v-img
                    style="border-radius: 5px;"
                    class="pa-0"
                    height="200"
                    contain
                    :src="edge.node.cover_image.src"
                  ></v-img>
                </v-col>

                <v-col cols="8" xs="12" md="8">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title
                        class="title"
                        v-html="edge.node.title"
                      />
                      <v-list-item-subtitle v-html="edge.node.subtitle" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                  <v-card-text
                    class="text--primary"
                    v-html="edge.node.description"
                  />
                </v-col>
              </v-row>
            </v-card>
            -->
          </v-row>
        </v-col>

        <v-col cols="2">
          <v-row
            align="stretch"
            justify="center"
            v-for="n in len_div_3()"
            :key="n"
          >
            <v-col cols="12" v-for="arg in next_at_offset(n)" :key="arg.id">
              <v-card hover>
                <v-card-title style="word-break: break-word">{{
                  arg.node.title
                }}</v-card-title>
                <v-card-text>
                  {{ arg.node.title }}
                </v-card-text>
                <v-card-actions>
                  <v-btn color="orange" text>
                    More
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
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
  info: allInfoCard(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        description
        cover_image (width: 770, height: 380, blur: 10)
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
export default {
  data() {
    return {};
  },
  methods: {
    len_div_3() {
      return Math.ceil(this.$page.args.edges.length / 3);
    },
    next_at_offset(n) {
      n -= 1;
      return this.$page.args.edges.slice(n * 3, n * 3 + 3);
    }
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>
