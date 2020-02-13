<template>
  <Layout>
    <InfoCard :card="$page.infoCard"/>
  </Layout>
</template>

<script>

import InfoCard from '~/components/InfoCard.vue'

export default {
  // name: 'InfoCard',
  components: {
    InfoCard
  },
  metaInfo () {
    return {
      title: this.$page.infoCard.title
    }
  }
}
</script>

<page-query>
  query InfoCard ($path: String!) {
    infoCard (path: $path) {
      title
      date (format: "D MMMM, YYYY")
	    cover_image
      content
    }
  }
</page-query>

