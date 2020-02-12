<template>
  <v-app>
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/summary">Summary</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
	<v-content>
      <v-container fluid>
        <slot/>
      </v-container>
    </v-content>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>


