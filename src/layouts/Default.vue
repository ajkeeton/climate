<template>
  <v-app>
    <v-app-bar app dense absolute elevation=2 class="toolbar-background">
  <!--
    <v-app-bar 
      app 
      dark
      elevation=12
      src="https://picsum.photos/1920/1080?random">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,0,.25), rgba(128,208,199,.9)"
        ></v-img>
      </template>
-->
      <v-toolbar-title>
        
      </v-toolbar-title>

      <v-btn text>
        <g-link class="nav__link" to="/">{{
          $static.metadata.siteName
        }}</g-link>
      </v-btn>

      <v-spacer></v-spacer>

      <Search/>
      <!--
      <v-spacer />
      <Search />
      <v-btn text>
        <g-link class="nav__link" to="/summary">The data</g-link>
      </v-btn>
      <v-btn text>
        <g-link class="nav__link" to="/summary">Common Arguments</g-link>
      </v-btn>
      <v-divider vertical />
      <v-btn text>
        <g-link class="nav__link" to="/about/">About</g-link>
      </v-btn>
      -->

      <!--
      <v-container>
        <v-row>
          <v-col cols="6" sm="6" md="3">
            <v-btn text>
              <g-link class="nav__link" to="/summary">The data</g-link>
            </v-btn>
            <v-btn text>
              <g-link class="nav__link" to="/summary">Common Arguments</g-link>
            </v-btn>
            <v-divider vertical />
            <v-btn text>
              <g-link class="nav__link" to="/about/">About</g-link>
            </v-btn>
          </v-col>
           <v-col cols="6" sm="6" md="3">
            <v-text-field
              label="Regular"/>
              <Search/>
          </v-col>
        </v-row>
      </v-container>
      -->
      <template v-slot:extension>
        <v-tabs centered>
          <v-tab to="/">Misinformation</v-tab>
          <v-tab to="/summary">The data</v-tab>
          <v-tab>Common arguments</v-tab>
          <v-tab to="/about">About</v-tab>
        </v-tabs>
      </template>
 
    </v-app-bar>
    <v-content style="padding-top: 50px;">
      <v-container fluid>
        <slot />
      </v-container>
    </v-content>
    <v-footer class="font-weight-medium pb-5">
    <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Search from "~/components/Search.vue";

export default {
  components: {
    Search
  }
};
</script>

<style scoped>
.app-background {
    background: #3A1C71;
    background: -webkit-linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71);
    background: linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71);
}
.toolbar-background {
  background-image: linear-gradient(180deg,hsla(0,0%,100%,0) 60%,#fff),linear-gradient(70deg,#dbedff 32%,#ebfff0);
  //background-image: linear-gradient(to right top, rgba(19, 84, 0, 0.25), rgba(128, 208, 199, 0.9));
}
</style>