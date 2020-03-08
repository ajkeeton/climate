<template>
  <v-card tile class="px-4">
    <v-list>
      <v-list-item-title class="headline" v-html="card.title" />
      <v-container class="pt-2">
        <v-row>
          <v-col xl6>
            <v-card flat>
              <v-img :src="card.cover_image.src" class="pr-n5"/>
            </v-card>
            <!--
            <v-tabs  right class="elevation-0">
              <v-tab class="caption">
                <v-icon left>info</v-icon>
                Info
              </v-tab>
              <v-tab class="caption">
                <v-icon left>more</v-icon>
                Sources
              </v-tab>
              <v-tab class="caption">
                <v-icon left>people</v-icon>
                Arguments
              </v-tab>
              <v-divider />

              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <div v-html="card.content"/>
                      
                    <p>
                      Nam ipsum risus, rutrum vitae, vestibulum eu, molestie
                      vel, lacus. Aenean tellus metus, bibendum sed, posuere ac,
                      mattis non, nunc. Aliquam lobortis. Aliquam lobortis.
                      Suspendisse non nisl sit amet velit hendrerit rutrum.
                    </p>

                    <p class="mb-0">
                      Phasellus dolor. Fusce neque. Fusce fermentum odio nec
                      arcu. Pellentesque libero tortor, tincidunt et, tincidunt
                      eget, semper nec, quam. Phasellus blandit leo ut odio.
                    </p>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text v-html="card.source" />
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text
                    >Figure out how to quary graphql for "related arguments and
                    link to htose"</v-card-text
                  >
                </v-card>
              </v-tab-item>
            </v-tabs>-->
            <v-card-text v-html="card.content"/>
            <v-divider />
            <v-card-text v-html="card.source"/>
            <v-divider />
            <v-card-subtitle v-html="card.date" />
          </v-col>
        </v-row>
      </v-container>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "InfoCard",
  props: ["card"]
};
</script>

<style>
img {
  max-width: 80%;
  margin-left: 10%;
}
h3 {
  text-align: center;
}
</style>
