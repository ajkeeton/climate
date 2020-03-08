// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'The CO2 Spew',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'InfoCard',
        path: './content/cards/**/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/posts/**/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'PageContent',
        path: './content/pages/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Argument',
        path: './content/args/*.md',
        refs: {
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: 'Tag',
            route: "/tag/:id",
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
          collections: [
              {
                typeName: 'Argument',
                indexName: 'indexArgument',
                fields: ['title', 'tags', 'description']
              }
          ],
          searchFields: ['title', 'tags']
      }
    }
  ],
  transformers: {
    remark: {
      squeezeParagraphs: false,
      imageQuality: 90,
      plugins: [
        'remark-attr',
       ]
    }
  }
}
