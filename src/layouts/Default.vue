<template>
  <v-app>
    <v-app-bar app dense absolute elevation="2" class="toolbar-background">
      <v-btn text>
        <g-link class="nav__link" to="/">{{
          $static.metadata.siteName
        }}</g-link>
      </v-btn>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <div class="d-flex d-sm-none">
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </div>
        <div
          class="d-flex pa-2 align-center justify-center"
          style="margin: auto;"
        >
          <div class="d-none d-sm-flex">
            <div class="mx-2">
              <v-btn small text to="/">The Misinformation</v-btn>
            </div>
            <v-divider vertical />
            <div class="mx-2">
              <v-btn small text to="/climate-data">The science</v-btn>
            </div>
            <v-divider vertical />
            <!--<div class="mx-2">
              <v-btn small text to="/common-arguments">Common arguments</v-btn>
            </div>
            <v-divider vertical />-->
            <div class="mx-2">
              <v-btn small text to="/about">About</v-btn>
            </div>
          </div>
        </div>
      </template>
      <Search />
    </v-app-bar>

    <v-content style="padding-top: 80px;">
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-card>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item>
                <v-list-item-title><v-btn small text to="/">The Misinformation</v-btn></v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title><v-btn small text to="/climate-data">The science</v-btn></v-list-item-title>
              </v-list-item>

              <!--
              <v-list-item>
                <v-list-item-title><v-btn small text to="/common-arguments">Common arguments</v-btn></v-list-item-title>
              </v-list-item>
              -->
              <v-list-item>
                <v-list-item-title><v-btn small text to="/about">About</v-btn></v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-navigation-drawer>

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
  data: () => ({
    drawer: false,
    group: null
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  },
  components: {
    Search
  }
};
</script>

<style scoped>
.app-background {
  background: #3a1c71;
  background: -webkit-linear-gradient(to right, #ffaf7b, #d76d77, #3a1c71);
  background: linear-gradient(to right, #ffaf7b, #d76d77, #3a1c71);
}
.toolbar-background {
  background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 60%, #fff),
    linear-gradient(70deg, #dbedff 32%, #ebfff0);
  //background-image: linear-gradient(to right top, rgba(19, 84, 0, 0.25), rgba(128, 208, 199, 0.9));
}
</style>
