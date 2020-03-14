import plugin_gridsome_vue_remark_5 from "/Users/akeeton/c/climate/node_modules/@gridsome/vue-remark/gridsome.client.js"
import plugin_gridsome_vue_remark_6 from "/Users/akeeton/c/climate/node_modules/@gridsome/vue-remark/gridsome.client.js"
import plugin_gridsome_vue_remark_7 from "/Users/akeeton/c/climate/node_modules/@gridsome/vue-remark/gridsome.client.js"
import plugin_gridsome_vue_remark_8 from "/Users/akeeton/c/climate/node_modules/@gridsome/vue-remark/gridsome.client.js"
import plugin_gridsome_plugin_flexsearch_9 from "/Users/akeeton/c/climate/node_modules/gridsome-plugin-flexsearch/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_vue_remark_5,
    options: {"baseDir":"./content/posts","typeName":"Post","pathPrefix":"posts","template":"./src/templates/Post.vue","plugins":[["gridsome-plugin-remark-youtube",{"width":"500px","align":"auto"}]],"index":["index"],"includePaths":[],"remark":{},"refs":{}}
  },
  {
    run: plugin_gridsome_vue_remark_6,
    options: {"typeName":"InfoCard","baseDir":"./content/cards","index":["index"],"includePaths":[],"plugins":[],"remark":{},"refs":{}}
  },
  {
    run: plugin_gridsome_vue_remark_7,
    options: {"typeName":"PageContent","baseDir":"./content/pages","index":["index"],"includePaths":[],"plugins":[],"remark":{},"refs":{}}
  },
  {
    run: plugin_gridsome_vue_remark_8,
    options: {"typeName":"Argument","baseDir":"./content/args","refs":{"tags":{"typeName":"Tag","route":"/tag/:id","create":true}},"index":["index"],"includePaths":[],"plugins":[],"remark":{}}
  },
  {
    run: plugin_gridsome_plugin_flexsearch_9,
    options: {"pathPrefix":"","siteUrl":"","collections":[{"typeName":"Post","indexName":"indexPost","fields":["title","tags","description","category"]},{"typeName":"Argument","indexName":"indexArgument","fields":["title","tags","description","category"]}],"searchFields":["title","tags","description"],"flexsearch":{"profile":"default"}}
  }
]
