export default [
  {
    path: "/content/posts/strossel-are-we-doomed/thedebate/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/akeeton/c/climate/src/templates/Post.vue")
  },
  {
    path: "/content/posts/ted-cruz/cruz-and-rss/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/akeeton/c/climate/src/templates/Post.vue")
  },
  {
    path: "/content/cards/problems-with-paleoclimatology/problems-with-paleoclimatology/",
    component: () => import(/* webpackChunkName: "page--src--templates--info-card-vue" */ "/Users/akeeton/c/climate/src/templates/InfoCard.vue")
  },
  {
    path: "/content/cards/nasa-gistemp/nasa-gistemp/",
    component: () => import(/* webpackChunkName: "page--src--templates--info-card-vue" */ "/Users/akeeton/c/climate/src/templates/InfoCard.vue")
  },
  {
    path: "/content/posts/greta-vs-curry/greta-curry/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/akeeton/c/climate/src/templates/Post.vue")
  },
  {
    path: "/content/cards/c-l12loc/cl12loc-an-outlier-in-context/",
    component: () => import(/* webpackChunkName: "page--src--templates--info-card-vue" */ "/Users/akeeton/c/climate/src/templates/InfoCard.vue")
  },
  {
    path: "/content/cards/1000-years/1000-years/",
    component: () => import(/* webpackChunkName: "page--src--templates--info-card-vue" */ "/Users/akeeton/c/climate/src/templates/InfoCard.vue")
  },
  {
    path: "/content/cards/800k-years/800k-years/",
    component: () => import(/* webpackChunkName: "page--src--templates--info-card-vue" */ "/Users/akeeton/c/climate/src/templates/InfoCard.vue")
  },
  {
    path: "/content/args/scientists-just-say-this-to-make-money/",
    component: () => import(/* webpackChunkName: "page--src--templates--argument-vue" */ "/Users/akeeton/c/climate/src/templates/Argument.vue")
  },
  {
    path: "/content/args/schwarzschild-radiative-transfer/",
    component: () => import(/* webpackChunkName: "page--src--templates--argument-vue" */ "/Users/akeeton/c/climate/src/templates/Argument.vue")
  },
  {
    path: "/content/args/scientists-fake-data/",
    component: () => import(/* webpackChunkName: "page--src--templates--argument-vue" */ "/Users/akeeton/c/climate/src/templates/Argument.vue")
  },
  {
    path: "/content/args/scientists-claimed-that/",
    component: () => import(/* webpackChunkName: "page--src--templates--argument-vue" */ "/Users/akeeton/c/climate/src/templates/Argument.vue")
  },
  {
    path: "/content/args/paleo/",
    component: () => import(/* webpackChunkName: "page--src--templates--argument-vue" */ "/Users/akeeton/c/climate/src/templates/Argument.vue")
  },
  {
    path: "/content/args/no-consensus/",
    component: () => import(/* webpackChunkName: "page--src--templates--argument-vue" */ "/Users/akeeton/c/climate/src/templates/Argument.vue")
  },
  {
    path: "/content/args/its-volcanoes/",
    component: () => import(/* webpackChunkName: "page--src--templates--argument-vue" */ "/Users/akeeton/c/climate/src/templates/Argument.vue")
  },
  {
    path: "/content/args/growing-glaciers/",
    component: () => import(/* webpackChunkName: "page--src--templates--argument-vue" */ "/Users/akeeton/c/climate/src/templates/Argument.vue")
  },
  {
    path: "/content/args/economics/",
    component: () => import(/* webpackChunkName: "page--src--templates--argument-vue" */ "/Users/akeeton/c/climate/src/templates/Argument.vue")
  },
  {
    path: "/content/args/banks-still-sell/",
    component: () => import(/* webpackChunkName: "page--src--templates--argument-vue" */ "/Users/akeeton/c/climate/src/templates/Argument.vue")
  },
  {
    path: "/content/args/always-changing/",
    component: () => import(/* webpackChunkName: "page--src--templates--argument-vue" */ "/Users/akeeton/c/climate/src/templates/Argument.vue")
  },
  {
    path: "/tag/:id/",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/akeeton/c/climate/src/templates/Tag.vue")
  },
  {
    path: "/summary/",
    component: () => import(/* webpackChunkName: "page--src--pages--summary-vue" */ "/Users/akeeton/c/climate/src/pages/Summary.vue")
  },
  {
    path: "/index-po-c-with-tags/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-po-c-with-tags-vue" */ "/Users/akeeton/c/climate/src/pages/Index-PoC-with_tags.vue")
  },
  {
    path: "/index-2/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-2-vue" */ "/Users/akeeton/c/climate/src/pages/Index-2.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/akeeton/c/climate/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/akeeton/c/climate/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/akeeton/c/climate/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/akeeton/c/climate/node_modules/gridsome/app/pages/404.vue")
  }
]

