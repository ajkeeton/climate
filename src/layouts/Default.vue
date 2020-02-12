<template>
  <v-app>
	<v-app-bar app clipped-left clipped-right>
		<v-btn text>
    	    <g-link class="nav__link" to="/">{{ $static.metadata.siteName }}</g-link>
		</v-btn>
		<v-spacer/>
		<v-btn text>
	        <g-link class="nav__link" to="/summary">Summary</g-link>
		</v-btn>
		<v-btn text>
        	<g-link class="nav__link" to="/about/">About</g-link>
		</v-btn>
	</v-app-bar>
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


