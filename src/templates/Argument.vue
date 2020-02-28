<template>
  <div>
    <h1 v-html="$page.argument.title" />
    <div v-html="$page.argument.content" />
  </div>
</template>

<page-query>
query ($path: String!) {
  argument (path: $path) {
    title
    content
  }
}
</page-query>