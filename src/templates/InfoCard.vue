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

<style>
  /* .header {
    margin-bottom: 70px;
  } */
  .article {
    margin-top: 15px;
  }
  .article h1 {
    font-size: 40px;
  }
  .article img {
    width: 100%;
    border-radius: 5px;
  }
  .article a {
    color: #4dba87;
    text-decoration: underline;
  }
  .article a:hover {
    text-decoration: none;
  }
  .article span {
    font-size: 80%;
    margin-bottom: 20px;
  }
  .article ol, .article ul {
    list-style-position: outside;
  }
  .article ul {
    list-style: disc;
    padding-left: 20px;
  }
  .article .content p:first-child {
    margin-top: 15px;
  }
  .article .content p {
    margin-top: 0;
    margin-bottom: 10px;
    line-height: 1.5;
  }
</style>
