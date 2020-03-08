<template>
  <Layout>
    <h1>Summary</h1>
    <div v-for="{ node } in $page.posts.edges" :key="node._id">
      <InfoCard :card="node"/>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allInfoCard(sortBy: "order", order: ASC, filter: { category: { eq: "summary" }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        description
        cover_image 
        path
        content
      }
    }
  }
}
</page-query>

<script>

import InfoCard from '~/components/InfoCard.vue'

export default {
  components: {
    InfoCard
  },
  metaInfo: {
    title: 'Summary'
  }
}
</script>
