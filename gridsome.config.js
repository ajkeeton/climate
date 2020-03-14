// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "The CO2 Spew",
  old_plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "InfoCard",
        path: "./content/cards/**/*.md"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "./content/posts/**/*.md"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "PageContent",
        path: "./content/pages/*.md"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Argument",
        path: "./content/args/*.md",
        refs: {
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: "Tag",
            route: "/tag/:id",
            create: true
          }
        }
      }
    }
  ],
  plugins: [
    {
      use: "@gridsome/vue-remark",
      options: {
        baseDir: "./content/posts",
        typeName: "Post", // Required
        pathPrefix: "posts",
        template: "./src/templates/Post.vue", // Optional
        plugins: [
          ["gridsome-plugin-remark-youtube", 
          { width: "500px", align: "auto" }]
        ]
      }
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "InfoCard",
        baseDir: "./content/cards"
      }
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "PageContent",
        baseDir: "./content/pages"
      }
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Argument",
        baseDir: "./content/args",
        refs: {
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: "Tag",
            route: "/tag/:id",
            create: true
          }
        }
      }
    },
    {
      use: "gridsome-plugin-flexsearch",
      options: {
        collections: [
          {
            typeName: "Post",
            indexName: "indexPost",
            fields: ["title", "tags", "description", "category"]
          },
          {
            typeName: "Argument",
            indexName: "indexArgument",
            fields: ["title", "tags", "description", "category"]
          }
        ],
        searchFields: ["title", "tags", "description"]
      }
    }
  ]
  /*
  transformers: {
    remark: {
      squeezeParagraphs: false,
      imageQuality: 90,
      plugins: ["remark-attr", 
         ['gridsome-plugin-remark-youtube', {width: '500px', align: 'auto'}]
      ]
    }
  }*/
};
