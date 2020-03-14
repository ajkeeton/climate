<template>
  <p class="ma-8">
    <span class="headline">"{{ quote }}"</span> - {{ source }}
  </p>
</template>

<script>
export default {
  props: ["quote", "source"]
};
</script>

<style></style>
