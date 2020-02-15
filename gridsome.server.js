// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const nodeExternals = require("webpack-node-externals");
const { GraphQLSchema } = require("gridsome/graphql");

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });

  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/]
        })
      ]);
    }
  }),
    api.loadSource(({ addSchemaTypes, schema }) => {
      addSchemaTypes([
        schema.createObjectType({
          name: "PageContent",
          interfaces: ["Node"],
          fields: {
            title: "String",
            content: "String",
            cover_image: "String",
            published: "Boolean"
          }
        }),
        schema.createObjectType({
          name: "Argument",
          interfaces: ["Node"],
          fields: {
            id: "ID!",
            title: "String",
            content: "String",
            cover_image: "String",
            published: "Boolean"
          }
        })
      ]);
    }),
    api.loadSource(store => {
      // Use the Data store API here: https://gridsome.org/docs/data-store-api
    });
};
