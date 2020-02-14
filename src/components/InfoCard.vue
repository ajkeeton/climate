<template>
  <v-card class="px-4 py-4">
    <v-list>
      <v-list-item-title class="headline" v-html="card.title" />
      <v-content class="pt-2">
        <v-layout wrap row>
          <v-flex xl12>
            <v-img :src="card.cover_image.src" />
          </v-flex>
          <v-flex xl6>
            <v-tabs
              vertical
              right
              class="elevation-4"
            >
              <v-tab class="caption">
                <v-icon left>info</v-icon>
                Info
              </v-tab>
              <v-divider/>
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
                    <p>
                      Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                      Morbi ac felis. Etiam feugiat lorem non metus. Sed a
                      libero.
                    </p>

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
                  <v-card-text v-html="card.content" />
                </v-card>
              </v-tab-item>
               <v-tab-item>
                <v-card flat>
                  <v-card-text>Figure out how to quary graphql for "related arguments and link to htose"</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>

            <v-card-subtitle v-html="card.date" />
          </v-flex>
        </v-layout>
      </v-content>
      <!--<v-card-subtitle v-html="card.date"/>-->
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "InfoCard",
  props: ["card"]
};
</script>

<style></style>
