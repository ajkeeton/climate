<template>
  <Layout>
    <v-content class="pt-2">
      <v-layout wrap row>
        <v-flex sm2 lg1>
        </v-flex>
        <v-flex sm8 md5 lg5>
          <v-card>
            <v-card-text v-html="$page.pageContent.content"/>
          </v-card>
        </v-flex>
        <v-flex offset-sm-2 offset-md-0 sm6 md5 lg6>
          <v-card>
            <v-card-text v-html="$page.pageContent.content"/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-content>
  </Layout>
</template>

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

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>