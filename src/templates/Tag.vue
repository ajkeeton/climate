<template>
  <Layout>
    <h1>Articles Tagged with: {{ $page.tag.title }}</h1>
    <ul>
      <li v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Tag($id: ID!) {
  tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Argument {
            id
            title
          }
        }
      }
    }
  },
  allTag {
    edges {
      node {
        id
        path
      }
    }
  }
}
</page-query>