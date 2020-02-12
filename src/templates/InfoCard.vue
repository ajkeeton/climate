<template>
  <Layout>
    <div class="article">
test test test
      <h1>{{ $page.infoCard.title }}</h1>
      <span>{{ $page.infoCard.date }}</span>
      <g-image v-if="$page.infoCard.cover_image" :src="$page.infoCard.cover_image"/>
      <div class="content" v-html="$page.infoCard.content" />
    </div>
  </Layout>
</template>

<script>
export default {
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

