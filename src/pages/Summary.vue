<template>
  <Layout>
    <h1>Summary</h1>

    <h1 v-html="$static.posts.edges[0].node.title"/>
    <h1 v-html="$static.posts.edges[1].node.title"/>
    <h1 v-html="$static.posts.edges[2].node.title"/>

    <ul>
      <li v-for="{ node } in $static.posts.edges" :key="node._id">
        <router-link :to="node.path">
          <h2 v-html="node.title"/>
        </router-link>
        <span v-html="node.date"/>
        <div v-html="node.description"/>
      </li>
    </ul>
  </Layout>
</template>

<static-query>
query {
  posts: allInfoCard(sortBy: "order", order: ASC, filter: { category: { eq: "summary" }}) {
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
}

</static-query>

<script>
export default {
  metaInfo: {
    title: 'Summary'
  }
}
</script>
