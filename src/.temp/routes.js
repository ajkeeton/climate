export default [
  {
    path: "/content/cards/problems-with-paleoclimatology/problems-with-paleoclimatology/",
    component: () => import(/* webpackChunkName: "page--src--templates--info-card-vue" */ "/Users/akeeton/c/climate/src/templates/InfoCard.vue")
  },
  {
    path: "/content/cards/nasa-gistemp/nasa-gistemp/",
    component: () => import(/* webpackChunkName: "page--src--templates--info-card-vue" */ "/Users/akeeton/c/climate/src/templates/InfoCard.vue")
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
    path: "/summary/",
    component: () => import(/* webpackChunkName: "page--src--pages--summary-vue" */ "/Users/akeeton/c/climate/src/pages/Summary.vue")
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
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/akeeton/c/climate/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/akeeton/c/climate/node_modules/gridsome/app/pages/404.vue")
  }
]

